ABILITY_DB = {
    "sklrate_pt": {
        "text": "戦闘中、パーティメンバーのスキル発動率が%f倍上昇",
        "arg_num": 1,
        "icon": "icon13",
        "powers": [{
            "name": "sklrate",
            "target": ["party"],
            "duration": ["always"],
            "args": [0]
        }]
    },
    "sklrate_pt_by_affection": {
        "text": "戦闘中、パーティメンバーのスキル発動率がそれぞれの好感度に応じて最大%f倍上昇",
        "arg_num": 1,
        "icon": "icon13",
        "powers": [{
            "name": "sklrate",
            "target": ["party"],
            "duration": ["always"],
            "args": [0]
        }]
    },
    "sklrate_pt_by_skllv": {
        "text": "戦闘中、自身のスキルLv(1~5)に応じて、パーティメンバーのスキル発動率が上昇(%f~%f倍)",
        "arg_num": 2,
        "icon": "icon13",
        "powers": [{
            "name": "sklrate_by_skllv",
            "target": ["party"],
            "duration": ["always"],
            "args": [0, 1]
        }]
    },
    "sklrate_pt_t1": {
        "text": "戦闘中、1ターン目のパーティメンバーのスキル発動率が%f倍上昇する",
        "arg_num": 1,
        "icon": "icon14",
        "skip": [
            1
        ],
        "powers": [{
            "name": "sklrate",
            "target": ["party"],
            "duration": ["t1"],
            "args": [0]
        }]
    },
    "sklrate_self_t1": {
        "text": "戦闘中、1ターン目の自身の戦闘スキル発動率が%f倍になる",
        "arg_num": 1,
        "icon": "icon14",
        "powers": [{
            "name": "sklrate",
            "target": ["self"],
            "duration": ["t1"],
            "args": [0]
        }]
    },
    "sklrate_pt_by_hit": {
        "note": "※回避時も効果は発動する",
        "text": "戦闘中、自身が攻撃を受けた次ターン時にパーティメンバーのスキル発動率が%f倍になる",
        "arg_num": 1,
        "icon": "icon13",
        "skip": [
            1
        ],
        "powers": [{
            "name": "sklrate_by_hit",
            "target": ["party"],
            "duration": ["always"],
            "args": [0]
        }]
    },
    "atk_pt": {
        "text": "戦闘中、パーティメンバーの攻撃力が%d%%上昇する",
        "arg_num": 1,
        "icon": "icon1",
        "skip": [
            1
        ]
    },
    "atk_pt_t1": {
        "text": "戦闘中、1ターン目のパーティメンバーの攻撃力が%d%%上昇",
        "arg_num": 1,
        "icon": "icon2",
        "skip": [
            0
        ]
    },
    "atk_pt_n_atk_self": {
        "text": "戦闘中、パーティメンバーの攻撃力が%d%%上昇し、さらに自身の攻撃力が%d%%上昇",
        "arg_num": 2,
        "icon": "icon1",
        "skip": [
            1
        ]
    },
    "atk_self": {
        "text": "戦闘中、自身の攻撃力が%d%%上昇",
        "arg_num": 1,
        "icon": "icon1"
    },
    "atk_self_nc": {
        "text": "戦闘中、自身を含む%d人の攻撃力が%d%%上昇",
        "arg_num": 2,
        "icon": "icon1"
    },
    "atk_pt_boss": {
        "text": "ボス敵との戦闘中、パーティメンバーの攻撃力が%d%%上昇する",
        "arg_num": 1,
        "icon": "icon9",
        "skip": [
            1
        ]
    },
    "atk_self_nc_boss": {
        "text": "ボス敵との戦闘中、自身を含む%d人の攻撃力が%d%%上昇",
        "arg_num": 2,
        "icon": "icon9"
    },
    "atk_pt_by_affection": {
        "text": "戦闘中、パーティメンバーの攻撃力がそれぞれの好感度に応じて最大%d%%上昇",
        "arg_num": 1,
        "icon": "icon1"
    },
    "atk_pt_n_atk_pt_boss": {
        "text": "戦闘中、パーティメンバーの攻撃力が%d%%上昇し、さらにボス敵との戦闘中、攻撃力が%d%%上昇する",
        "arg_num": 2,
        "icon": "icon1",
        "skip": [
            1,
            3
        ]
    },
    "atk_pt_n_atk_pt_t1": {
        "text": "戦闘中、パーティメンバーの攻撃力が%d%%上昇し、さらに1ターン目のパーティメンバーの攻撃力が%d%%上昇",
        "arg_num": 2,
        "icon": "icon1",
        "skip": [
            1,
            2
        ]
    },
    "atk_pt_n_atk_self_nc": {
        "text": "戦闘中、パーティメンバーの攻撃力が%d%%上昇し、さらに自身を含む%d人の攻撃力が%d%%上昇",
        "arg_num": 3,
        "icon": "icon1",
        "skip": [
            1
        ]
    },
    "atk_pt_by_enemy_num_cur": {
        "note": "※3体なら%d%%、2体なら%d%%、1体なら%d%%上昇",
        "text": "戦闘中、パーティメンバーの攻撃力が敵の数が少なくなるほど上昇",
        "arg_num": 0,
        "icon": "icon7"
    },
    "atk_pt_by_enemy_num_begin": {
        "text": "戦闘中、パーティメンバーの攻撃力が戦闘開始時の敵の数x%d%%上昇",
        "arg_num": 1,
        "icon": "icon7"
    },
    "atk_pt_n_atk_pt_by_enemy_num_begin": {
        "text": "戦闘中、パーティメンバーの攻撃力が%d%%上昇し、さらに攻撃力が戦闘開始時の敵の数x%d%%上昇",
        "arg_num": 2,
        "icon": "icon1",
        "skip": [
            1,
            2
        ]
    },
    "atk_pt_by_pt_c_begin": {
        "note": "※最大50%%上昇",
        "text": "戦闘中、パーティメンバーの攻撃力が戦闘開始時のメンバーの数x%d%%上昇",
        "arg_num": 1,
        "icon": "icon1",
        "skip": [
            1
        ]
    },
    "atk_pt_by_turn": {
        "note": "※最大%d%%まで上昇可能、経過ターン数は戦闘ごとにリセットされる",
        "text": "戦闘中、パーティメンバーの攻撃力がターン経過に応じ%d%%ずつ上昇",
        "arg_num": 1,
        "icon": "icon38"
    },
    "atk_pt_by_def": {
        "note": "※防御力、攻撃力の割合増加アビリティのどちらも影響する",
        "text": "戦闘中、パーティメンバーの攻撃力に、それぞれの防御力の%d%%を追加する",
        "arg_num": 1,
        "icon": "icon1",
        "skip": [
            0
        ]
    },
    "atk_pt_by_spd": {
        "note": "※移動力の増減、攻撃力の割合増加アビリティの効果も影響する",
        "text": "戦闘中、パーティメンバーの攻撃力に、パーティの移動力の%d%%を追加する",
        "arg_num": 1,
        "icon": "icon4",
        "skip": [
            0
        ]
    },
    "atk_pt_n_atk_pt_by_turn": {
        "note": "※最大60%%まで上昇可能、経過ターン数は戦闘ごとにリセットされる",
        "text": "戦闘中、パーティメンバーの攻撃力が%d%%上昇し、さらにターン経過に応じ%d%%ずつ上昇",
        "arg_num": 2,
        "icon": "icon1"
    },
    "atk_self_by_pt_sklact": {
        "note": "※戦闘スキル発動回数による自身の攻撃力は最大%d%%まで上昇可能",
        "text": "戦闘中、パーティメンバーの戦闘スキルが発動する度に、自身の攻撃力が%d%%ずつ上昇",
        "arg_num": 1,
        "icon": "icon8"
    },
    "atk_self_by_pt_attr": {
        "note": "※アビリティによって追加された属性は対象外",
        "text": "戦闘中、パーティメンバーの属性の種類が多いほど、攻撃力が上昇\\(1属性で15%%、2属性で30%%、3属性以上で45%%)",
        "arg_num": 0,
        "icon": "icon1"
    },
    "atk_pt_by_solar": {
        "note": "※光GAUGE100%%で1回、200%%で2回、300%%で3回分の攻撃力が上昇",
        "text": "討伐中のソーラードライブ発動回数に応じ、パーティメンバーの攻撃力が%d%%ずつ、最大%d%%まで上昇",
        "arg_num": 2,
        "icon": "icon3"
    },
    "atk_self_by_solar": {
        "note": "※光GAUGE100%%で1回、200%%で2回、300%%で3回分の攻撃力が上昇",
        "text": "討伐中のソーラードライブ発動回数に応じ、自身の攻撃力が%d%%ずつ、最大%d%%まで上昇",
        "arg_num": 2,
        "icon": "icon3"
    },
    "skldmg_pt": {
        "text": "戦闘中、パーティメンバーのスキルダメージが%d%%上昇",
        "arg_num": 1,
        "icon": "icon13",
        "skip": [
            0,
            2
        ]
    },
    "skldmg_self": {
        "text": "戦闘中、自身のスキルダメージが%d%%上昇",
        "arg_num": 1,
        "icon": "icon13"
    },
    "skldmg_pt_n_skldmg_self": {
        "text": "戦闘中、パーティメンバーのスキルダメージが%d%%上昇し、さらに自身のスキルダメージが%d%%上昇",
        "arg_num": 2,
        "icon": "icon13"
    },
    "skldmg_pt_n_atk_self_nc": {
        "text": "戦闘中、パーティメンバーのスキルダメージが%d%%上昇し、さらに自身を含む%d人の攻撃力が%d%%上昇",
        "arg_num": 3,
        "icon": "icon13"
    },
    "critrate_pt_n_critdmg_pt": {
        "note": "※他のアビリティとの組み合わせで発生率は最大80%%まで上昇可能",
        "text": "戦闘中、パーティメンバーのクリティカル攻撃発生率が%d%%上昇し、クリティカルダメージが%d%%上昇",
        "arg_num": 2,
        "icon": "icon15",
        "skip": [
            1,
            3,
            4,
            5
        ]
    },
    "critrate_pt": {
        "note": "※他のアビリティとの組み合わせで発生率は最大80%%まで上昇可能",
        "text": "戦闘中、パーティメンバーのクリティカル攻撃発生率が%d%%上昇させる",
        "arg_num": 1,
        "icon": "icon15",
        "skip": [
            1,
            2,
            3
        ]
    },
    "critdmg_pt": {
        "text": "戦闘中、パーティメンバーのクリティカルダメージが%d%%上昇",
        "arg_num": 1,
        "icon": "icon15"
    },
    "critrate_self_n_critdmg_self": {
        "note": "※他のアビリティとの組み合わせで発生率は最大80%%まで上昇可能",
        "text": "戦闘中、自身のクリティカル攻撃発生率が%d%%上昇し、クリティカルダメージが%d%%上昇",
        "arg_num": 2,
        "icon": "icon15",
        "skip": [
            0,
            3,
            4
        ]
    },
    "critdmg_pt_n_critdmg_self": {
        "text": "戦闘中、パーティメンバーのクリティカルダメージが%d%%上昇し、自身のクリティカルダメージが%d%%上昇",
        "arg_num": 2,
        "icon": "icon15",
        "skip": [
            2,
            3
        ]
    },
    "crit_hit_self_t1_n_critdmg_self": {
        "text": "戦闘中、1ターン目の自身の攻撃が必ずクリティカルになり、クリティカルダメージが%d%%上昇",
        "arg_num": 1,
        "icon": "icon15",
        "skip": [
            2,
            3
        ]
    },
    "dmg_pt_t1": {
        "text": "戦闘中、1ターン目のパーティメンバーの与えるダメージを%d%%上昇",
        "arg_num": 1,
        "icon": "icon10"
    },
    "dmg_self_by_hp": {
        "note": "※例として、現在HP100%%でダメージ50%%上昇",
        "text": "戦闘中、自身の現在HP/最大HPの1/2を割合として、敵へのダメージが上昇",
        "arg_num": 0,
        "icon": "icon10"
    },
    "dmg_pt_boss": {
        "text": "戦闘中、パーティメンバーがボスに対して与えるダメージが%d%%増加する",
        "arg_num": 1,
        "icon": "icon11",
        "skip": [
            0
        ]
    },
    "dmg_pt_boss_2": {
        "text": "戦闘中、パーティメンバーのボスへのダメージが%d%%上昇",
        "arg_num": 1,
        "icon": "icon11"
    },
    "dmg_pt_by_hit": {
        "note": "※回避時も効果は発動する",
        "text": "戦闘中、自身が攻撃を受けた次ターン時にパーティメンバーの与えるダメージが%d%%上昇",
        "arg_num": 1,
        "icon": "icon10"
    },
    "dmg_pt_boss_n_dmg_self_boss": {
        "text": "戦闘中、パーティメンバーがボスに対して与えるダメージが%d%%、さらに自身がボスに対して与えるダメージが%d%%増加",
        "arg_num": 2,
        "icon": "icon11"
    },
    "dmg_self_nc_boss": {
        "text": "自身を含む%d人がボスに対して与えるダメージが%d%%増加",
        "arg_num": 2,
        "icon": "icon11"
    },
    "dmg_pt_by_turn": {
        "note": "※最大%d%%まで上昇可能、経過ターン数は戦闘ごとにリセットされる",
        "text": "戦闘中、パーティメンバーの与えるダメージがターン経過に応じ%d%%ずつ上昇",
        "arg_num": 1,
        "icon": "icon10"
    },
    "dmg_pt_by_solar": {
        "note": "※光GAUGE100%%で1回、200%%で2回、300%%で3回分のダメージが上昇",
        "text": "討伐中のソーラードライブ発動回数に応じ、パーティメンバーの与えるダメージが%d%%ずつ、最大%d%%まで上昇",
        "arg_num": 2,
        "icon": "icon3"
    },
    "2ndact_pt": {
        "note": "※ターン制限のない再行動の確率は最大90%%まで上昇可能",
        "text": "戦闘中、パーティメンバーが%d%%の確率で再行動する",
        "arg_num": 1,
        "icon": "icon16",
        "skip": [
            1
        ]
    },
    "2ndact_self": {
        "text": "戦闘中、自身が敵に攻撃を与えた後、%d%%の確率で自身は再行動する",
        "arg_num": 1,
        "icon": "icon16",
        "skip": [
            0
        ]
    },
    "2ndact_self_11": {
        "text": "戦闘中、1ターン目に自身が敵に攻撃を与えた後%d%%の確率で自身は再行動する",
        "arg_num": 1,
        "icon": "icon17"
    },
    "weak_slash_nc": {
        "note": "※斬属性以外のメンバーを対象に選び、同じ効果のアビリティは重複しない",
        "text": "戦闘中、自身を含む%d人が、斬属性弱点の敵に対して弱点(1.5倍ダメージ)が発動する",
        "arg_num": 1,
        "icon": "icon1201",
        "skip": [
            1,
            2
        ]
    },
    "weak_blunt_nc": {
        "note": "※打属性以外のメンバーを対象に選び、同じ効果のアビリティは重複しない",
        "text": "戦闘中、自身を含む%d人が、打属性弱点の敵に対して弱点(1.5倍ダメージ)が発動する",
        "arg_num": 1,
        "icon": "icon1202",
        "skip": [
            1,
            2
        ]
    },
    "weak_pierce_nc": {
        "note": "※突属性以外のメンバーを対象に選び、同じ効果のアビリティは重複しない",
        "text": "戦闘中、自身を含む%d人が、突属性弱点の敵に対して弱点(1.5倍ダメージ)が発動する",
        "arg_num": 1,
        "icon": "icon1203",
        "skip": [
            1,
            2
        ]
    },
    "weak_magic_nc": {
        "note": "※魔属性以外のメンバーを対象に選び、同じ効果のアビリティは重複しない",
        "text": "戦闘中、自身を含む%d人が、魔属性弱点の敵に対して弱点(1.5倍ダメージ)が発動する",
        "arg_num": 1,
        "icon": "icon1204",
        "skip": [
            1,
            2
        ]
    },
    "weak_roulette_bm_self_2c": {
        "note": "※魔属性以外のメンバーを対象に選び、同じ効果のアビリティは重複しない",
        "text": "自身と、打以外の2人、魔以外の2人が、順に打、魔属性弱点の敵に対し弱点(1.5倍ダメージ)が発動",
        "arg_num": 0,
        "icon": "icon37"
    },
    "weak_roulette_bp_self_2c": {
        "note": "※自身と同じ弱点属性は対象外となり、同効果アビリティは重複しない",
        "text": "自身と、打以外の2人、突以外の2人が、順に打、突属性弱点の敵に対し弱点(1.5倍ダメージ)が発動",
        "arg_num": 0,
        "icon": "icon37"
    },
    "weak_roulette_spm_self_2c": {
        "note": "※自身と同じ弱点属性は対象外となり、同効果アビリティは重複しない",
        "text": "自身と、斬以外の2人、突以外の2人、魔以外の2人が、順に斬、突、魔属性弱点の敵に対し弱点(1.5倍ダメージ)が発動",
        "arg_num": 0,
        "icon": "icon37"
    },
    "weak_roulette_bpm_self_2c": {
        "note": "※自身と同じ弱点属性は対象外となり、同効果アビリティは重複しない",
        "text": "自身と、打以外の2人、突以外の2人、魔以外の2人が、順に打、突、魔属性弱点の敵に対し弱点(1.5倍ダメージ)が発動",
        "arg_num": 0,
        "icon": "icon37"
    },
    "weak_roulette_sbm_self_2c": {
        "note": "※自身と同じ弱点属性は対象外となり、同効果アビリティは重複しない",
        "text": "自身と、斬以外の2人、打以外の2人、魔以外の2人が、順に斬、打、魔属性弱点の敵に対し弱点(1.5倍ダメージ)が発動",
        "arg_num": 0,
        "icon": "icon37"
    },
    "weak_roulette_sbp_self_2c": {
        "note": "※自身と同じ弱点属性は対象外となり、同効果アビリティは重複しない",
        "text": "自身と、斬以外の2人、打以外の2人、突以外の2人が、順に斬、打、突属性弱点の敵に対し弱点(1.5倍ダメージ)が発動",
        "arg_num": 0,
        "icon": "icon37"
    },
    "weakdmg_pt": {
        "text": "戦闘中、パーティメンバーの弱点属性の敵に対するダメージが%d%%上昇する",
        "arg_num": 1,
        "icon": "icon39"
    },
    "atk_pt_n_skldmg_pt": {
        "text": "戦闘中、パーティメンバーの攻撃力が%d%%上昇し、さらにスキルダメージが%d%%上昇",
        "arg_num": 2,
        "icon": "icon1",
        "skip": [
            1
        ]
    },
    "atk_pt_n_dmg_pt_boss": {
        "text": "戦闘中、パーティメンバーの攻撃力が%d%%上昇し、ボスに対して与えるダメージが%d%%増加する",
        "arg_num": 2,
        "icon": "icon1"
    },
    "atk_pt_boss_n_dmg_pt_boss": {
        "text": "ボス敵との戦闘中、パーティメンバーの攻撃力が%d%%上昇、さらにボスへのダメージが%d%%上昇",
        "arg_num": 2,
        "icon": "icon9",
        "skip": [
            2
        ]
    },
    "atk_pt_n_dmg_self_by_hp": {
        "note": "※例として、現在HP100%%でダメージ50%%上昇",
        "text": "戦闘中、パーティメンバーの攻撃力が%d%%、自身の現在HP/最大HPの2分の1を割合として、自身の敵へのダメージが上昇",
        "arg_num": 1,
        "icon": "icon1"
    },
    "atk_pt_n_sklrate_pt_by_affection": {
        "text": "戦闘中、パーティメンバーの攻撃力が%d%%上昇し、戦闘中、パーティメンバーのスキル発動率がそれぞれの好感度に応じて最大%.1f倍上昇",
        "arg_num": 2,
        "icon": "icon1",
        "skip": [
            1
        ]
    },
    "atk_pt_n_2ndact_self": {
        "text": "戦闘中、パーティメンバーの攻撃力が%d%%上昇し、自身が敵に攻撃を与えた後、%d%%の確率で自身は再行動する",
        "arg_num": 2,
        "icon": "icon1"
    },
    "atk_pt_n_envade": {
        "text": "戦闘中、パーティメンバーの攻撃力が%d%%上昇し、2ターンまで%d%%、以降は%d%%の確率で敵の攻撃を回避する",
        "arg_num": 3,
        "icon": "icon1"
    },
    "atk_pt_n_spd": {
        "text": "戦闘中、パーティメンバーの攻撃力が%d%%上昇し、パーティの移動力が%d増加",
        "arg_num": 2,
        "icon": "icon1"
    },
    "spd_n_atk_pt_by_spd": {
        "note": "※移動力の増減、攻撃力の割合増加アビリティの効果も影響する",
        "text": "パーティの移動力が%d増加し、戦闘中、パーティメンバーの攻撃力に、パーティの移動力の%d%%を追加する",
        "arg_num": 2,
        "icon": "icon24"
    },
    "atk_dmg_self_by_pt_c_dying": {
        "note": "※自身の攻撃力が%d%%上昇し、与えるダメージが%d%%上昇",
        "text": "戦闘中、パーティメンバーいずれかのHPが50%%以下になった場合、その戦闘中は自身の能力が上昇する",
        "arg_num": 0,
        "icon": "icon1"
    },
    "sklrate_pt_n_dmg_pt_boss": {
        "text": "戦闘中、パーティメンバーのスキル発動率が%.1f倍上昇し、ボスに対して与えるダメージが%d%%増加する",
        "arg_num": 2,
        "icon": "icon13"
    },
    "skldmg_self_n_dmg_self_boss": {
        "text": "戦闘中、自身のスキルダメージが%d%%上昇し、ボスに対して与えるダメージが%d%%増加する",
        "arg_num": 2,
        "icon": "icon13"
    },
    "def_pt": {
        "note": "※他アビリティとの組み合わせで軽減率は最大+20%%まで上昇可能",
        "text": "パーティメンバーの防御力が%d%%上昇、防御時のダメージ軽減率が%.1f%%上昇、自身は確率で3回まで戦闘不能にならずHP1で耐える",
        "arg_num": 2,
        "icon": "icon18",
        "skip": [
            1,
            3
        ]
    },
    "def_self_nc": {
        "note": "※他アビリティとの組み合わせで軽減率は最大+20%%まで上昇可能",
        "text": "自身を含む%d人の防御力が%d%%上昇、防御時のダメージ軽減率が%.1f%%上昇、自身は確率で3回まで戦闘不能にならずHP1で耐える",
        "arg_num": 3,
        "icon": "icon18",
        "skip": [
            3
        ]
    },
    "shield_pt": {
        "note": "※無効より回避や攻撃ミスが優先され、同じ効果のアビリティは重複しない",
        "text": "戦闘中、パーティメンバーが、それぞれ1回ダメージを無効化する",
        "arg_num": 0,
        "icon": "icon20"
    },
    "shield_self_ntimes": {
        "note": "※無効より回避や攻撃ミスが優先され、同じ効果のアビリティは重複しない",
        "text": "戦闘中、自身は%d回ダメージを無効化する",
        "arg_num": 1,
        "icon": "icon20"
    },
    "counter": {
        "text": "攻撃を受けた時、自身は%d%%の確率で防御力の%.1f倍を攻撃力に変換し反撃する",
        "arg_num": 2,
        "icon": "icon21",
        "skip": [
            0
        ]
    },
    "super_counter": {
        "note": "※超反撃は通常反撃の2倍のダメージ",
        "text": "攻撃を受けた時、自身は%d%%の確率で防御力の%.1f倍を攻撃力に変換し反撃、防御発動時の反撃は超反撃が発動する",
        "arg_num": 2,
        "icon": "icon21",
        "skip": [
            0,
            3
        ]
    },
    "pursuit": {
        "text": "戦闘中、自身が攻撃を行った後、自身はパーティ総合力の%d%%を攻撃力に変換し追撃する",
        "arg_num": 1,
        "icon": "icon16"
    },
    "pursuit_all": {
        "text": "戦闘中、自身が攻撃を行った後、自身はパーティ総合力の%d%%を攻撃力に変換し、敵全体に追撃する",
        "arg_num": 1,
        "icon": "icon16"
    },
    "gauge_init": {
        "text": "光GAUGEが%d%%溜まった状態から討伐開始",
        "arg_num": 1,
        "icon": "icon23"
    },
    "gauge_fillrate": {
        "note": "※他アビリティとの組み合わせで最大75%%まで上昇",
        "text": "戦闘中、パーティメンバーのシャインクリスタルのドロップ率が%d%%上昇",
        "arg_num": 1,
        "icon": "icon23"
    },
    "solar_dmg": {
        "text": "戦闘中、ソーラードライブの効果が%d%%上昇",
        "arg_num": 1,
        "icon": "icon23"
    },
    "solar_dmg_n_gauge_init": {
        "text": "戦闘中、ソーラードライブの効果が%d%%上昇し、光GAUGEが%d%%溜まった状態から討伐開始",
        "arg_num": 2,
        "icon": "icon23"
    },
    "solar_dmg_n_gauge_fillrate": {
        "note": "※他アビリティとの組み合わせでドロップ率は最大75%%まで上昇",
        "text": "戦闘中、ソーラードライブの効果が%d%%上昇し、パーティメンバーのシャインクリスタルのドロップ率が%d%%上昇",
        "arg_num": 2,
        "icon": "icon23"
    },
    "envade_self_2t": {
        "text": "戦闘中、自身は2ターンまで%d%%、それ以降は%d%%の確率で敵の攻撃を回避する",
        "arg_num": 2,
        "icon": "icon19",
        "skip": [
            1
        ]
    },
    "de_atk_all": {
        "note": "※他アビリティとの組み合わせで敵の攻撃力は最大70%%まで低下可能",
        "text": "敵全体の攻撃力を%d%%低下させる。",
        "arg_num": 1,
        "icon": "icon32"
    },
    "de_atk_ne": {
        "note": "※他アビリティとの組み合わせで敵の攻撃力は最大70%%まで低下可能",
        "text": "敵%d体の攻撃力を%d%%低下させる。",
        "arg_num": 2,
        "icon": "icon32",
        "skip": [
            2
        ]
    },
    "de_sklrate_all": {
        "note": "※他アビリティとの組み合わせで敵のスキル発動率は最大90%%まで低下可能",
        "text": "スキルを使用する敵全体のスキル発動率を%d%%低下させる。",
        "arg_num": 1,
        "icon": "icon34"
    },
    "de_sklrate_ne": {
        "note": "※他アビリティとの組み合わせで敵のスキル発動率は最大90%%まで低下可能",
        "text": "スキルを使用する敵%d体のスキル発動率を%d%%低下させる。",
        "arg_num": 2,
        "icon": "icon34"
    },
    "de_miss_ne": {
        "note": "※他アビリティとの組み合わせで敵の攻撃ミスは最大70%%の確率まで上昇可能",
        "text": "敵%d体が%d%%の確率で攻撃をミスするようになる",
        "arg_num": 2,
        "icon": "icon33",
        "skip": [
            2
        ]
    },
    "de_act_all": {
        "note": "※他アビリティとは別々に発動する",
        "text": "戦闘中、ターンごとに%d%%の確率で敵の行動回数を1回減らす",
        "arg_num": 1,
        "icon": "icon45"
    },
    "spd_pt": {
        "text": "パーティの移動力が%d増加",
        "arg_num": 1,
        "icon": "icon24"
    },
    "dmg_panel_heal": {
        "text": "ダメージギミックパネルを通過するとパーティメンバー全員のHPが%d%%回復する",
        "arg_num": 1,
        "icon": "icon31"
    },
    "spd_panel_ignore": {
        "text": "パーティが移動力増減パネルの効果を受けなくなる",
        "arg_num": 0,
        "icon": "icon26"
    },
    "rainbow_panel": {
        "note": "※重複不可、クジラ艇任務はデッキ上での戦いで全パーティに適用",
        "text": "討伐開始時にノーマルパネルが3個レインボーパネルに変化、通過で全パーティのスキル発動率が1.1倍上昇し、HPが回復",
        "arg_num": 0,
        "icon": "icon29"
    },
    "heal_self": {
        "note": "※HP回復は他アビリティとは別々に発動する",
        "text": "毎ターン%d%%の確率で自身の最大HPの%d%%回復",
        "arg_num": 2,
        "icon": "icon22"
    },
    "heal_self_2": {
        "text": "戦闘中、毎ターン%d%%の確率で自身の最大HPの%d%%回復する",
        "arg_num": 2,
        "icon": "icon22"
    },
    "revival_self_nc": {
        "note": "※HPが0のメンバーが優先して選ばれる。回復ブースト効果は適用されない",
        "text": "自身のHPが0になった場合、討伐中に1度だけ敵のターン終了後、自身を含む%d人のHPを50%%回復する(HPが0ではHP50%%で復活)",
        "arg_num": 1,
        "icon": "icon22"
    }
}