// remove specified element in Array
function removeArrayElement(array, element) {
    var index = array.indexOf(element);

    // remove element if found
    if (index > -1) {
        array.splice(index, 1);
    }

    return index;
}

/* ---------- */
class FilterCate {
    constructor(name, type, btns) {
        this.name = name;

        // type
        this.type = {};
        this.type.m_sel = type.includes('m-sel');
        this.type.reset = type.includes('reset');

        // selector
        this.btns = {};
        this.reset_btn = null;
        this.selected = [];

        // construct
        this.node = this.initNode();
        this.initType();
        this.initButtons(btns);

        return this;
    }
    /****** Reset Filter ******/
    resetFilter() {
        var selected_snapshot = this.selected.slice(0);

        // toggle off all buttons
        for (var key in selected_snapshot) {
            if (selected_snapshot[key]) {
                this.toggleOffButton(selected_snapshot[key]);
            }
        }

        // toggle on reset button if needed
        if (this.type.reset) {
            this.toggleOnButton(this.reset_btn);
        }
    }
    /****** Toggle Button ******/
    toggleOnButton(btn) {
        btn.node.classList.add('light-red');

        if (!this.selected.includes(btn)) {
            this.selected.push(btn);
        }
    }
    toggleOffButton(btn) {
        btn.node.classList.remove('light-red');

        if (this.selected.includes(btn)) {
            removeArrayElement(this.selected, (btn));
        }
    }
    toggleButton(btn) {
        /* toggle on / off */
        if (this.selected.includes(btn)) {
            // toggle off
            this.toggleOffButton(btn);
        } else {
            // toggle on
            this.toggleOnButton(btn);

            // reset filter if reset is on
            if (btn == this.reset_btn) {
                this.resetFilter();
            }
        }

        /* check whether reset need to be toggled */
        if (this.type.reset) {
            if (this.selected.length > 1 && this.selected.includes(this.reset_btn)) {
                // toggle off reset if other button is on
                this.toggleOffButton(this.reset_btn);
            } else if (this.selected.length == 0) {
                // toggle on reset if all other buttons are off
                this.toggleOnButton(this.reset_btn);
            }
        }
    }
    /****** Append Button ******/
    appendButton(name, fp_click) {
        var ele_btn = document.createElement('div');
        var obj_cate = this;
        var obj_btn = {
            name: name,
            node: ele_btn,
            fp_click: fp_click
        };

        ele_btn.className = 'button';
        ele_btn.textContent = name;
        ele_btn.addEventListener('click', function() {
            obj_cate.toggleButton(obj_btn);
        });

        // append to this
        this.node.querySelector('.button-group').appendChild(ele_btn);
        this.btns[name] = obj_btn;
        return obj_btn;
    }
    /****** Initialization ******/
    initNode() {
        if (typeof this.initNode.template == 'undefined') {
            var ele_cate = document.createElement('div');
            var ele_head = document.createElement('div');
            var ele_bgroup = document.createElement('div');
            // head
            ele_head.className = 'head';
            ele_cate.appendChild(ele_head);
            // button group
            ele_bgroup.className = 'button-group';
            ele_cate.appendChild(ele_bgroup);
            // finish
            ele_cate.className = 'cate';
            this.initNode.template = ele_cate;
        }
        var ele_cate = this.initNode.template.cloneNode(true);
        var ele_head = ele_cate.querySelector('.head');
        // name
        ele_head.textContent = this.name;
        // finish
        return ele_cate;
    }
    initType() {
        if (this.type.reset) {
            var btn = this.appendButton('全て');
            this.reset_btn = btn;
            this.toggleOnButton(btn);
        }
        else {
            console.error('Unknown filter cate type: ' + this.type);
        }
    }
    initButtons(btns) {
        for (var key in btns) {
            var btn = btns[key];

            this.appendButton(btn.name, btn.fp_click);
        }
    }
}

var PageChara = {
    /******* Chareters *******/
    createCharaRow: function(portrait_path, name, hp, att, def, speed, skill, abilities) {
        var _PORTRAIT_PATH = './images/portrait/';
        function formPlate() {
            var ele_plate = document.createElement('div');
            var ele_col = document.createElement('div');
            var ele_img = document.createElement('img');

            // portrait
            ele_col = document.createElement('div');
            ele_img.src = '#';
            ele_img.className = 'icon';
            ele_col.appendChild(ele_img);
            
            ele_col.className = 'portrait';
            ele_plate.appendChild(ele_col);
            
            // other state
            ele_col = document.createElement('div');
            ele_col.className = 'state hp';
            ele_plate.appendChild(ele_col);
            
            ele_col = document.createElement('div');
            ele_col.className = 'state atk';
            ele_plate.appendChild(ele_col);
            
            ele_col = document.createElement('div');
            ele_col.className = 'state def';
            ele_plate.appendChild(ele_col);
            
            ele_col = document.createElement('div');
            ele_col.className = 'state spd';
            ele_plate.appendChild(ele_col);
            
            // skill
            ele_col = document.createElement('div');
            ele_col.className = 'skill';
            
            ele_div = document.createElement('div');
            ele_div.className = 'skill-name';
            ele_col.appendChild(ele_div);
            
            ele_div = document.createElement('div');
            ele_div.className = 'skill-rate';
            ele_col.appendChild(ele_div);
            
            ele_div = document.createElement('div');
            ele_div.className = 'skill-text';
            ele_col.appendChild(ele_div);
    
            // composite plate
            ele_plate.className = 'plate';
            ele_plate.appendChild(ele_col);

            return ele_plate;
        }
        if (typeof this.createCharaRow.template == 'undefined') {
            var ele_row = document.createElement('div');
            var ele_col = document.createElement('div');
            var ele_div = document.createElement('div');
            
            
            // name
            ele_col.className = 'name';
            ele_row.appendChild(ele_col);
            
            // plate
            ele_plate = formPlate();
            ele_row.appendChild(ele_plate);
            
            // ability
            ele_col = document.createElement('div');
            ele_col.className = 'abilities';
            ele_row.appendChild(ele_col)
            
            this.createCharaRow.template = ele_row;
        }
            
        var ele_row = this.createCharaRow.template.cloneNode(true);
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
        
        ele_ability = ele_row.querySelector('.abilities');
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
    },
    appendChara: function(portrait_path, name, hp, att, def, speed, skill, abilities) {
        var row = this.createCharaRow(portrait_path, name, hp, att, def, speed, skill, abilities);
        document.querySelector('#chara-zone').appendChild(row);
        
        return row;
    },
    loadChara: function(charas) {
        var STAGE = 2;

        for (var key in charas) {
            var chara = charas[key];
            
            //console.log(chara);
    
            // construct portrait path
            p_idx = (chara.portrait_num <= STAGE) ? chara.portrait_num - 1 : STAGE;
            portrait_path = chara.no + '_' + p_idx;

            // append charater
            this.appendChara(
                portrait_path,
                chara.name, 
                chara.hps[STAGE], 
                chara.atks[STAGE], 
                chara.defs[STAGE], 
                chara.speed,
                chara.skill, 
                chara.abilities[STAGE]);
        }
    },
    /****** Filter ******/
    filterCates: [],
    appendFilterCate: function(name, type, btns) {
        var filter_body = document.querySelector('#filter-popup .body');
        var obj_cate = new FilterCate(name, type, btns);

        filter_body.appendChild(obj_cate.node);
        this.filterCates.push(obj_cate);
    },
    loadFilter: function() {
        this.appendFilterCate('レアリティ', 'm-sel reset', [
            {name: '6★'},
            {name: '6★ (通常)'},
            {name: '6★ (昇華)'},
            {name: '5★'}
        ]);

        this.appendFilterCate('属性', 'm-sel reset', [
            {name: '斬'},
            {name: '打'},
            {name: '突'},
            {name: '魔'},
        ]);

        // install listener for top-bar
        document.querySelector('#chara-top-bar .filter').addEventListener('click', function() {
            var popup = document.querySelector('#filter-popup');

            UI.showCover();
            popup.classList.add('show');
        });

        document.querySelector('#filter-popup .foot .confirm').addEventListener('click', function() {
            var popup = document.querySelector('#filter-popup');

            UI.hideCover();
            popup.classList.remove('show');
        });

        document.querySelector('#filter-popup .foot .reset').addEventListener('click', function() {
            for (var key in PageChara.filterCates) {
                PageChara.filterCates[key].resetFilter();
            }
        });

    },
}

/* ---------- */
window.addEventListener("load", function() {
    // construct charater list
    PageChara.loadChara(chara_6);    

    // construct filter
    PageChara.loadFilter();

    // debug
    document.querySelector('#chara-top-bar .filter').click();
});