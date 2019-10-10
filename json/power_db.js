const POWER_BUILDER = {
    'buff': function(power, ablility) {
        let results = [];

        // XXX: assuming there is no t1, t3 ...
        console.assert(power.duration.length == 1);

        for (key in power.target) {
            var item = {};

            item.duration = power.duration[0];
            item.target = power.target[key];
            
            item.vals = [];
            power.args.forEach((index) => {
                item.vals.push(ablility.vals[index]);
            });

            results.push({name: power.name, item: item});
        }

        return results;
    }
};

const POWER_BUILDER_MAP = {
    sklrate: POWER_BUILDER.buff,
    sklrate_by_skllv: POWER_BUILDER.buff,
    sklrate_by_hit: POWER_BUILDER.buff,
};

const POWER_TYPE_SET = {
    sklrate: ['sklrate', 'sklrate_by_skllv', 'sklrate_by_hit'],
};

const POWER_FILTER = {
    /****** Skill Rate ******/
    hasSklrate: function(powers) {
        const set = POWER_TYPE_SET.sklrate;

        for (let key in set) {
            if (set[key] in powers)
                return true;
        }

        return false;
    },
    isSklrateFp: function(skl_powers, fp) {
        for (let key in skl_powers) {
            if (fp(skl_powers[key]))
                return true;
        }

        return false;
    },
    isSklrate12: function(powers) {
        return this.isSklrateFp(powers.sklrate, (power) => {
            return power.duration == 'always' && power.vals[0] >= 1.2;
        });
    },
    isSklrateSkllv: function(powers) {
        return this.isSklrateFp(powers.sklrate_by_skllv, (power) => {
            return true;
        });
    },
    isSklrateT1: function(powers) {
        return this.isSklrateFp(powers.sklrate, (power) => {
            return power.duration == 't1';
        });
    },
    isSklrateHit: function(powers) {
        return this.isSklrateFp(powers.sklrate_by_hit, (power) => {
            return true;
        });
    },
    isSklrateSelf: function(powers) {
        return this.isSklrateFp(powers.sklrate, (power) => {
            return power.target == 'self';
        });
    },
    /****** Attack ******/
    /****** Skill damage ******/
    /****** Criticals ******/
};