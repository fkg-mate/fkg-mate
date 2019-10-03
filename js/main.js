
/* ---------- */
var _PORTRAIT_PATH = './images/portrait/';

function createCharaRow(portrait_path, name, hp, att, def, speed, skill, abilities) {
    if (typeof createCharaRow.template == 'undefined') {
        var ele_tr = document.createElement('tr');
        var ele_td = document.createElement('td');
        var ele_img = document.createElement('img');
        var ele_div = document.createElement('div');
        
        
        // name
        ele_div.className = 'name';
        ele_td.appendChild(ele_div)
        
        ele_td.className = 'name';
        ele_tr.appendChild(ele_td)

        // portrait
        ele_td = document.createElement('td');
        ele_img.src = '#';
        ele_img.className = 'icon';
        ele_td.appendChild(ele_img);
        
        ele_td.className = 'portrait';
        ele_tr.appendChild(ele_td)
        
        // other stats
        ele_td = document.createElement('td');
        ele_td.className = 'stats hp';
        ele_tr.appendChild(ele_td)
        
        ele_td = document.createElement('td');
        ele_td.className = 'stats atk';
        ele_tr.appendChild(ele_td)
        
        ele_td = document.createElement('td');
        ele_td.className = 'stats def';
        ele_tr.appendChild(ele_td)
        
        ele_td = document.createElement('td');
        ele_td.className = 'stats spd';
        ele_tr.appendChild(ele_td)
        
        // skill
        ele_td = document.createElement('td');
        ele_td.className = 'stats skill';
        
        ele_div = document.createElement('div');
        ele_div.className = 'skill-name';
        ele_td.appendChild(ele_div)
        
        ele_div = document.createElement('div');
        ele_div.className = 'skill-rate';
        ele_td.appendChild(ele_div)
        
        ele_div = document.createElement('div');
        ele_div.className = 'skill-text';
        ele_td.appendChild(ele_div)
        
        ele_tr.appendChild(ele_td)
        
        // ability
        ele_td = document.createElement('td');
        ele_td.className = 'ability';
        ele_tr.appendChild(ele_td)
        
        createCharaRow.template = ele_tr;
    }
        
    var ele_row = createCharaRow.template.cloneNode(true);
    ele_row.querySelector('div.name').textContent   = name;
    ele_row.querySelector('.hp').textContent        = hp;
    ele_row.querySelector('.atk').textContent       = att;
    ele_row.querySelector('.def').textContent       = def;
    ele_row.querySelector('.spd').textContent       = speed;
    
    ele_row.querySelector('.icon').src = _PORTRAIT_PATH + portrait_path + '.jpg';
    
    // Construct skill zone
    ele_row.querySelector('.skill-name').textContent = skill.name;
    
    skill_rates = skill.rates[0] + '% (' + skill.rates[1] + '%)'
    ele_row.querySelector('.skill-rate').textContent = skill_rates;
    
    
    // load ability from database
    if (skill.type in SKILL_DB) {
        skill_base = SKILL_DB[skill.type];
        skill_text = vsprintf(skill_base.text, skill.vals);
    } else {
        console.error('Ability '+ability.type+' not found');
        skill_text = 'Not found';
    }
    ele_row.querySelector('.skill-text').textContent = skill_text;
    
    
    // Flatten abilities
    var ele_br = document.createElement('br');
    
    ele_ability = ele_row.querySelector('.ability');
    for (var key in abilities) {
        var ele_div = document.createElement('div');
        var ele_idiv = document.createElement('div');
        var ability = abilities[key];
        
        // load ability from database
        if (!ability.type in ABILITY_DB) {
            console.error('Ability '+ability.type+' not found');
            continue;
        }
        
        ability_base = ABILITY_DB[ability.type]
        
        // apply ability text
        text = vsprintf(ability_base.text, ability.vals);
        node = document.createTextNode(text);
        ele_idiv.appendChild(node);
        
        if ('note' in ability_base) {
            var ele_note = document.createElement('span');
            
            note_vals = ability.vals;
            note_vals.splice(0, ability_base.arg_num);
            note = vsprintf(ability_base.note, note_vals);
            ele_note.className = 'note';
            ele_note.textContent = note;
            
            ele_idiv.appendChild(ele_note);
        }
        
        
        // tuck inner div for virtical align
        ele_div.className = 'ability-inner';
        ele_div.appendChild(ele_idiv);
        
        // apply ability icon
        icon = ability_base.icon
        ele_div.className = 'ability';
        ele_div.style.backgroundImage = 'url(./images/icon/'+icon+'.jpg)';
        ele_ability.appendChild(ele_div);
    }
    
    return ele_row;
}

function appendChara(portrait_path, name, hp, att, def, speed, skill, abilities) {
    var row = createCharaRow(portrait_path, name, hp, att, def, speed, skill, abilities);
    document.querySelector('#chara').appendChild(row);
    
    return row;
}

STAGE = 2;
function loadChara(charas) {
    for (var key in charas) {
        var chara = charas[key];
        
        //console.log(chara);
 
        // construct portrait path
        p_idx = (chara.portrait_num <= STAGE) ? chara.portrait_num - 1 : STAGE;
        portrait_path = chara.no + '_' + p_idx;

        // append charater
        appendChara(
            portrait_path,
            chara.name, 
            chara.hps[STAGE], 
            chara.atks[STAGE], 
            chara.defs[STAGE], 
            chara.speed,
            chara.skill, 
            chara.abilities[STAGE]);
    }
}

window.addEventListener("load", function() {
    loadChara(chara_6);    
});