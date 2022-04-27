const _PORTRAIT_PATH = './images/portrait/';

let CharaViewer = {
    FilterRuleset: class {
        constructor(name, type, rules) {
            this.name = name;

            // type
            this.type = {};
            this.type.m_sel = type.includes('m-sel');
            this.type.reset = type.includes('reset');
            this.type.cover = type.includes('cover');
            this.type.and   = type.includes('and');

            // rules
            this.rules = {};
            this.rule_clear = null;
            this.rule_cover = null;
            this.activated_rules = [];

            // construct
            this.node = this.initNode();
            this.initType();
            this.initRules(rules);

            // check
            if (this.type.cover) {
                console.assert(this.rule_cover);
            }

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
                // reset filter if reset is on
                if (this.type.reset && rule == this.rule_clear) {
                    this.resetFilter();
                } else if (this.type.cover && rule == this.rule_cover) {
                    this.resetFilter();
                } 
                // toggle on
                this.toggleOnRule(rule);
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
            } else if (this.type.cover) {
                if (this.activated_rules.length > 1 && this.activated_rules.includes(this.rule_cover)) {
                    // toggle off cover button if other button is on
                    this.toggleOffRule(this.rule_cover);
                }
            }
        }
        /****** Append Rule ******/
        appendRule(name, fp_filter, cover=false) {
            var ele_rule = document.createElement('div');
            var obj_cate = this;
            var obj_rule = {
                name: name,
                node: ele_rule,
                fp_filter: fp_filter
            };

            // construct DOM
            ele_rule.className = 'button';
            ele_rule.textContent = name;
            ele_rule.addEventListener('click', function() {
                obj_cate.toggleRule(obj_rule);
            });

            // cover button
            if (cover) {
                console.assert(this.type.cover);
                this.rule_cover = obj_rule;
            }

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
                // can only use one (reset or 1st-all)
                console.assert(!this.type.lst_all);

                var rule = this.appendRule('全て', () => { return true; });
                this.rule_clear = rule;
                this.toggleOnRule(rule);
            }
        }
        initRules(rules) {
            for (var key in rules) {
                var rule = rules[key];
                var cover = (rule.cover)? true: false;

                this.appendRule(rule.name, rule.fp_filter, cover);
            }
        }
    },

    Charater: class{ 
        constructor(data, stage) {
            this.no         = data.no;
            this.name       = data.name;
            this.names      = data.names;

            this.rarity     = data.rarity;
            this.attribute  = data.type;
            this.country    = data.country;
            this.like       = data.like;
            this.skill      = data.skill;
            this.spd        = data.speed;

            this.portrait_num = data.portrait_num;
            this.max_stage = 2; // XXX: should get from data
            this.stats_list = [];
            this.abilities_list = [];
            this.powers_list = [];

            // stage related
            for (var i = 0; i <= this.max_stage; i++) {
                var stats = {};
                stats.hp  = data.hps[i];
                stats.atk = data.atks[i];
                stats.def = data.defs[i];

                this.stats_list.push(stats);
                this.abilities_list.push(data.abilities[i]);

                // abilities power table
                this.powers_list.push(this.buildPower(this.abilities_list[i]));
            }
            //console.log(this.powers_list);

            // construct
            this.node = this.initNode(stage);
            
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

                // skip if no activated rule
                if (filter.activated_rules.length == 0) {
                    continue;
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
        /****** Power ******/
        buildPower(abilities) {
            let powers = {};

            for (let key in abilities) {
                let ability = abilities[key];

                // load ability base from database
                const base = ABILITY_DB[ability.type];
                if (!ability.type in ABILITY_DB) {
                    console.error('Unknown ability type '+ability.type);
                    continue;
                }

                // load powers 
                if (!('powers' in base)) {
                    //console.error('no power for ability type '+ability.type);
                    continue;
                }

                // traverse all powers
                base.powers.forEach((power) => {
                    const builder = POWER_BUILDER_MAP[power.name];
                    if (!builder) return;
                    
                    let results = builder(power, ability);
                    
                    for (let key in results) {
                        let result = results[key];
                        
                        pushSmart(powers, result.name, result.item);
                    }
                });

            }
            
            return powers;
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
            var p_idx = (this.portrait_num <= stage)? this.portrait_num - 1: stage;
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
    },

    /******* Chareters *******/
    stage: 2,
    charaters: [],
    loadChara: function(charas) {
        var chara_zone = document.querySelector('#chara-zone');
        for (var key in charas) {
            var chara_data = charas[key];
            var obj_chara = new this.Charater(chara_data, this.stage);
            
            chara_zone.appendChild(obj_chara.node);
            this.charaters.push(obj_chara);

            // debug
            //console.log(obj_chara);
        }
    },

    /****** Filter ******/
    basicFilterRulesets: [],
    abilityFilterRulesets: [],
    applyFilter: function() {
        var filters = this.basicFilterRulesets.concat(this.abilityFilterRulesets);

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
        if (first_visible) {
            first_visible.classList.add('first');
        }
    },

    appendBaiscRuleset: function (name, type, rules) {
        var filter_body = document.querySelector('#basic-filter .body');
        var obj_rulset = new this.FilterRuleset(name, type, rules);

        filter_body.appendChild(obj_rulset.node);
        this.basicFilterRulesets.push(obj_rulset);
    },

    appendAbilityRuleset: function (name, type, rules) {
        var filter_body = document.querySelector('#ability-filter .body');
        var obj_rulset = new this.FilterRuleset(name, type, rules);

        filter_body.appendChild(obj_rulset.node);
        this.abilityFilterRulesets.push(obj_rulset);
    },

    /****** Initialization ******/
    loadBasicRulesets: function() {
        this.appendBaiscRuleset('レアリティ', 'm-sel reset', [
            {fp_filter: (chara) => { return chara.rarity == 6; }, name: '6★'},
            {fp_filter: (chara) => { return chara.rarity == 6; }, name: '6★ (通常)'},
            //{fp_filter: (chara) => { return chara.rarity == 6; }, name: '6★ (昇華)'},
            {fp_filter: (chara) => { return chara.rarity == 5; }, name: '5★'}
        ]);

        this.appendBaiscRuleset('属性', 'm-sel reset', [
            {fp_filter: (chara) => { return chara.attribute == '斬'; }, name: '斬'},
            {fp_filter: (chara) => { return chara.attribute == '打'; }, name: '打'},
            {fp_filter: (chara) => { return chara.attribute == '突'; }, name: '突'},
            {fp_filter: (chara) => { return chara.attribute == '魔'; }, name: '魔'}
            //{fp_filter: (chara) => { return chara.attribute == 'slash'; }, name: '斬'},
            //{fp_filter: (chara) => { return chara.attribute == 'blunt'; }, name: '打'},
            //{fp_filter: (chara) => { return chara.attribute == 'pierce'; }, name: '突'},
            //{fp_filter: (chara) => { return chara.attribute == 'magic'; }, name: '魔'}
        ]);

        this.appendBaiscRuleset('スキル', 'm-sel reset', [
            {fp_filter: (chara) => { return chara.skill.type == 'single'; },    name: '単体'},
            {fp_filter: (chara) => { return chara.skill.type == 'vampire'; },   name: '吸収'},
            {fp_filter: (chara) => { return chara.skill.type == 'tristrike'; }, name: '複数回'},
            {fp_filter: (chara) => { return chara.skill.type == 'double'; },    name: '2体'},
            {fp_filter: (chara) => { return chara.skill.type == 'smart'; },     name: '変則'},
            {fp_filter: (chara) => { return chara.skill.type == 'all'; },       name: '全体'}
        ]);
    },
    loadAbilityRulesets: function() {
        this.appendAbilityRuleset('スキル発動率', 'm-sel cover', [
            { name: 'あり', fp_filter: (chara) => { return POWER_FILTER.hasSklrate(chara.powers_list[this.stage]) }, cover: true}, 
            { name: '1.2倍 (∞)', fp_filter: (chara) => { return POWER_FILTER.isSklrate12(chara.powers_list[this.stage]) }},
            { name: '1.36倍 (スキルLV)', fp_filter: (chara) => { return POWER_FILTER.isSklrateSkllv(chara.powers_list[this.stage]) }},
            { name: '1.65倍 (1T)', fp_filter: (chara) => { return POWER_FILTER.isSklrateT1(chara.powers_list[this.stage]) }},
            { name: '2倍 (受け)', fp_filter: (chara) => { return POWER_FILTER.isSklrateHit(chara.powers_list[this.stage]) }},
            { name: '2倍 (自身)', fp_filter: (chara) => { return POWER_FILTER.isSklrateSelf(chara.powers_list[this.stage]) }},
        ]);
        this.appendAbilityRuleset('反撃', 'm-sel cover', [
            { name: 'あり', fp_filter: (chara) => { return POWER_FILTER.hasCounter(chara.powers_list[this.stage]) }, cover: true}, 
            { name: '反撃だけ', fp_filter: (chara) => { return POWER_FILTER.isCounter(chara.powers_list[this.stage]) }},
            { name: '超反撃だけ', fp_filter: (chara) => { return POWER_FILTER.isSuperCounter(chara.powers_list[this.stage]) }},
        ]);
    },
    installEventListener: function() {
        // basic filter
        document.querySelector('#chara-top-bar .basic-filter').addEventListener('click', function() {
            UI.showCover();
            document.querySelector('#basic-filter').classList.add('show');
        });

        document.querySelector('#basic-filter .foot .confirm').addEventListener('click', function() {
            CharaViewer.applyFilter();

            UI.hideCover();
            document.querySelector('#basic-filter').classList.remove('show');
        });

        // ability filter
        document.querySelector('#basic-filter .foot .reset').addEventListener('click', function() {
            for (var key in PageChara.filterRulesets) {
                PageChara.filterRulesets[key].resetFilter();
            }
        });

        document.querySelector('#chara-top-bar .ability-filter').addEventListener('click', function() {
            UI.showCover();
            document.querySelector('#ability-filter').classList.add('show');
        });

        document.querySelector('#ability-filter .foot .confirm').addEventListener('click', function() {
            CharaViewer.applyFilter();

            UI.hideCover();
            document.querySelector('#ability-filter').classList.remove('show');
        });

        document.querySelector('#ability-filter .foot .reset').addEventListener('click', function() {
            for (var key in PageChara.filterRulesets) {
                PageChara.filterRulesets[key].resetFilter();
            }
        });

    },
    init: function() {
        this.loadChara(chara_6);

        this.loadBasicRulesets();
        this.loadAbilityRulesets();

        this.installEventListener();
    },
}