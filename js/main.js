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
var _PORTRAIT_PATH = './images/portrait/';

class FilterRuleset {
    constructor(name, type, rules) {
        this.name = name;

        // type
        this.type = {};
        this.type.m_sel = type.includes('m-sel');
        this.type.reset = type.includes('reset');
        this.type.and   = type.includes('and');

        // rules
        this.rules = {};
        this.rule_clear = null;
        this.activated_rules = [];

        // construct
        this.node = this.initNode();
        this.initType();
        this.initRules(rules);

        return this;
    }
    /****** Reset Filter ******/
    resetFilter() {
        var activated_rules_snapshot = this.activated_rules.slice(0);

        // toggle off all buttons
        for (var key in activated_rules_snapshot) {
            if (activated_rules_snapshot[key]) {
                this.toggleOffRule(activated_rules_snapshot[key]);
            }
        }

        // toggle on reset button if needed
        if (this.type.reset) {
            this.toggleOnRule(this.rule_clear);
        }
    }
    /****** Toggle Rule ******/
    toggleOnRule(rule) {
        rule.node.classList.add('light-red');

        if (!this.activated_rules.includes(rule)) {
            this.activated_rules.push(rule);
        }
    }
    toggleOffRule(rule) {
        rule.node.classList.remove('light-red');

        if (this.activated_rules.includes(rule)) {
            removeArrayElement(this.activated_rules, (rule));
        }
    }
    toggleRule(rule) {
        /* toggle on / off */
        if (this.activated_rules.includes(rule)) {
            // toggle off
            this.toggleOffRule(rule);
        } else {
            // toggle on
            this.toggleOnRule(rule);

            // reset filter if reset is on
            if (rule == this.rule_clear) {
                this.resetFilter();
            }
        }

        /* check whether reset need to be toggled */
        if (this.type.reset) {
            if (this.activated_rules.length > 1 && this.activated_rules.includes(this.rule_clear)) {
                // toggle off reset if other button is on
                this.toggleOffRule(this.rule_clear);
            } else if (this.activated_rules.length == 0) {
                // toggle on reset if all other buttons are off
                this.toggleOnRule(this.rule_clear);
            }
        }
    }
    /****** Append Rule ******/
    appendRule(name, fp_filter) {
        var ele_rule = document.createElement('div');
        var obj_cate = this;
        var obj_rule = {
            name: name,
            node: ele_rule,
            fp_filter: fp_filter
        };

        ele_rule.className = 'button';
        ele_rule.textContent = name;
        ele_rule.addEventListener('click', function() {
            obj_cate.toggleRule(obj_rule);
        });

        // append to this
        this.node.querySelector('.button-group').appendChild(ele_rule);
        this.rules[name] = obj_rule;
        return obj_rule;
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
            var rule = this.appendRule('全て', () => { return true; });
            this.rule_clear = rule;
            this.toggleOnRule(rule);
        }
        else {
            console.error('Unknown filter cate type: ' + this.type);
        }
    }
    initRules(rules) {
        for (var key in rules) {
            var rule = rules[key];

            this.appendRule(rule.name, rule.fp_filter);
        }
    }
}

class Charater{ 
    constructor(data) {
        this.no         = data.no;
        this.name       = data.name;
        this.names      = data.names;

        this.rarity     = data.rarity;
        this.attribute  = data.type;
        this.country    = data.country;
        this.like       = data.like;
        this.skill      = data.skill;
        this.spd        = data.speed;

        this.max_stage  = 2; // XXX: should get from data
        this.stats_list = [];
        this.abilities_list = [];

        for (var i = 0; i <= this.max_stage; i++) {
            var stats = {};
            stats.hp  = data.hps[i];
            stats.atk = data.atks[i];
            stats.def = data.defs[i];

            this.stats_list.push(stats);
            this.abilities_list.push(data.abilities[i]);
        }

        // construct
        this.node = this.initNode(PageChara.stage);
        
        return this;
    }
    /****** Filter ******/
    applyFilter(filters) {
        var result = true;

        for (var key in filters) {
            var filter = filters[key];
            var filter_result = false;

            // XXX: WIP
            if (filter.type.and) {
                console.error("Filter type 'and' is not implemented yet")
            }

            // check every rule in filter
            for (var key in filter.activated_rules) {
                var rule = filter.activated_rules[key];
                if (rule.fp_filter(this)) {
                    filter_result = true;
                    break;
                }
            }

            if (!filter_result) {
                result = false;
                break;
            }
        }

        // show / hide node depend on result
        if (result) {
            this.showNode();
        } else {
            this.hideNode();
        }
    }
    /****** Styles ******/
    showNode() {
        this.node.classList.remove('hide');
    }
    hideNode() {
        this.node.classList.add('hide');
    }
    /****** Portrait ******/
    portrait_name(stage) {
        var p_idx = (this.max_stage <= stage)? this.max_stage - 1: stage;
        return this.no + '_' + p_idx;
    }
    portrait_path(stage) {
        return _PORTRAIT_PATH + this.portrait_name(stage) + '.jpg';
    }
    /****** Initialization ******/
    initNode(stage) {
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
        if (typeof this.initNode.template == 'undefined') {
            var ele_row = document.createElement('div');
            var ele_col = document.createElement('div');
            var ele_div = document.createElement('div');
            var ele_plate = formPlate();
            
            // name
            ele_col.className = 'name';
            ele_row.appendChild(ele_col);
            
            // plate
            ele_row.appendChild(ele_plate);
            
            // ability
            ele_col = document.createElement('div');
            ele_col.className = 'abilities';
            ele_row.appendChild(ele_col)
            
            this.initNode.template = ele_row;
        }
            
        var ele_row = this.initNode.template.cloneNode(true);

        // surpress stage
        var suppress = false;
        if (stage > this.max_stage) {
            stage = this.max_stage;
            suppress = true;
        }
        
        // basic information
        var name = (suppress)? this.name+' (Suppressed)': this.name;
        ele_row.querySelector('div.name').textContent   = name;
        ele_row.querySelector('.hp').textContent        = this.stats_list[stage].hp;
        ele_row.querySelector('.atk').textContent       = this.stats_list[stage].atk;
        ele_row.querySelector('.def').textContent       = this.stats_list[stage].def;
        ele_row.querySelector('.spd').textContent       = this.spd;
        
        ele_row.querySelector('.icon').src = this.portrait_path(stage);
        
        // Construct skill zone
        var skill_rates = this.skill.rates[0] + '% (' + this.skill.rates[1] + '%)'
        ele_row.querySelector('.skill-name').textContent = this.skill.name;
        ele_row.querySelector('.skill-rate').textContent = skill_rates;
        
        // load ability from database
        var skill_text;
        if (this.skill.type in SKILL_DB) {
            var skill_base = SKILL_DB[this.skill.type];
            skill_text = vsprintf(skill_base.text, this.skill.vals);
        } else {
            console.error('Ability '+this.ability.type+' not found');
            skill_text = 'Not found';
        }
        ele_row.querySelector('.skill-text').textContent = skill_text;
        
        // Flatten abilities
        var ele_ability = ele_row.querySelector('.abilities');

        for (var key in this.abilities_list[stage]) {
            var ele_div = document.createElement('div');
            var ele_idiv = document.createElement('div');
            var ability = this.abilities_list[stage][key];
            
            // load ability from database
            if (!ability.type in ABILITY_DB) {
                console.error('Ability '+ability.type+' not found');
                continue;
            }
            
            var ability_base = ABILITY_DB[ability.type]
            
            // apply ability text
            var text = vsprintf(ability_base.text, ability.vals);
            var node = document.createTextNode(text);
            ele_idiv.appendChild(node);
            
            if ('note' in ability_base) {
                var ele_note = document.createElement('span');
                var note_vals = ability.vals;
                var note;

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
            var icon = ability_base.icon
            ele_div.className = 'ability';
            ele_div.style.backgroundImage = 'url(./images/icon/'+icon+'.jpg)';
            ele_ability.appendChild(ele_div);
        }
        
        return ele_row;
    }
}

var PageChara = {
    /******* Chareters *******/
    stage: 2,
    charaters: [],
    loadChara: function(charas) {
        var chara_zone = document.querySelector('#chara-zone');
        for (var key in charas) {
            var chara_data = charas[key];
            var obj_chara = new Charater(chara_data);
            
            chara_zone.appendChild(obj_chara.node);
            this.charaters.push(obj_chara);

            // debug
            //console.log(obj_chara);
        }
    },
    /****** Filter ******/
    filterRulesets: [],
    applyFilter: function() {
        var filters = this.filterRulesets;

        // filter out charaters
        this.charaters.forEach(function(charater) {
            charater.applyFilter(filters);
        });

        // clear class for old first visiable charater
        document.querySelectorAll('#chara-zone > div.first').forEach((chara_node) => {
            chara_node.classList.remove('first');
        });

        // set calss for new first visiable charater
        var first_visible = document.querySelector('#chara-zone > div:not(.hide)');
        first_visible.classList.add('first');
    },
    appendRuleset: function(name, type, rules) {
        var filter_body = document.querySelector('#filter-popup .body');
        var obj_rulset = new FilterRuleset(name, type, rules);

        filter_body.appendChild(obj_rulset.node);
        this.filterRulesets.push(obj_rulset);
    },
    loadFilter: function() {
        this.appendRuleset('レアリティ', 'm-sel reset', [
            {fp_filter: (chara) => { return chara.rarity == 6; }, name: '6★'},
            {fp_filter: (chara) => { return chara.rarity == 6; }, name: '6★ (通常)'},
            //{fp_filter: (chara) => { return chara.rarity == 6; }, name: '6★ (昇華)'},
            {fp_filter: (chara) => { return chara.rarity == 5; }, name: '5★'}
        ]);

        this.appendRuleset('属性', 'm-sel reset', [
            {fp_filter: (chara) => { return chara.attribute == '斬'; }, name: '斬'},
            {fp_filter: (chara) => { return chara.attribute == '打'; }, name: '打'},
            {fp_filter: (chara) => { return chara.attribute == '突'; }, name: '突'},
            {fp_filter: (chara) => { return chara.attribute == '魔'; }, name: '魔'}
            //{fp_filter: (chara) => { return chara.attribute == 'slash'; }, name: '斬'},
            //{fp_filter: (chara) => { return chara.attribute == 'blunt'; }, name: '打'},
            //{fp_filter: (chara) => { return chara.attribute == 'pierce'; }, name: '突'},
            //{fp_filter: (chara) => { return chara.attribute == 'magic'; }, name: '魔'}
        ]);

        this.appendRuleset('スキル', 'm-sel reset', [
            {fp_filter: (chara) => { return chara.skill.type == 'single'; },    name: '単体'},
            {fp_filter: (chara) => { return chara.skill.type == 'vampire'; },   name: '吸収'},
            {fp_filter: (chara) => { return chara.skill.type == 'tristrike'; }, name: '複数回'},
            {fp_filter: (chara) => { return chara.skill.type == 'double'; },    name: '2体'},
            {fp_filter: (chara) => { return chara.skill.type == 'smart'; },     name: '変則'},
            {fp_filter: (chara) => { return chara.skill.type == 'all'; },       name: '全体'}
        ]);

        // install listener for top-bar
        document.querySelector('#chara-top-bar .filter').addEventListener('click', function() {
            var popup = document.querySelector('#filter-popup');

            UI.showCover();
            popup.classList.add('show');
        });

        document.querySelector('#filter-popup .foot .confirm').addEventListener('click', function() {
            var popup = document.querySelector('#filter-popup');

            PageChara.applyFilter();

            UI.hideCover();
            popup.classList.remove('show');
        });

        document.querySelector('#filter-popup .foot .reset').addEventListener('click', function() {
            for (var key in PageChara.filterRulesets) {
                PageChara.filterRulesets[key].resetFilter();
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
    //document.querySelector('#chara-top-bar .filter').click();
});