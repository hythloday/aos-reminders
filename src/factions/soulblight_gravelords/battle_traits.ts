import { tagAs } from 'factions/metatagger'
import { SOULBLIGHT_GRAVELORDS } from 'meta/factions'
import {
  BATTLESHOCK_PHASE,
  COMBAT_PHASE,
  DURING_SETUP,
  END_OF_BATTLESHOCK_PHASE,
  END_OF_MOVEMENT_PHASE,
  HERO_PHASE,
  SAVES_PHASE,
  START_OF_HERO_PHASE,
  START_OF_SETUP,
  TURN_FOUR_START_OF_ROUND,
  TURN_ONE_DURING_ROUND,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'
import rule_sources from './rule_sources'

const BattleTraits = {
  [SOULBLIGHT_GRAVELORDS]: {
    effects: [
      {
        name: `Deadly Coordination`,
        desc: `In the combat phase, after a friendly SOULBLIGHT GRAVELORDS HERO that is not a MONSTER has fought in that phase for the first time, you can pick 1 friendly SUMMONABLE unit that has not yet fought in that phase, that is within 3" of an enemy unit and that is wholly within 12" of that friendly SOULBLIGHT GRAVELORDS HERO. That SUMMONABLE unit fights immediately.`,
        when: [COMBAT_PHASE],
        rule_sources: [rule_sources.WHITE_DWARF_DECEMBER_2021],
      },
      {
        name: `The Unquiet Dead`,
        desc: `After territories have been chosen but before armies are set up, you can pick up to 2 points within your territory and up to 2 points anywhere on the battlefield outside your territory to be gravesites. Each gravesite must be more than 1" from all terrain features and objectives. If both players can set up gravesites at the same time, or if one player can set up faction terrain features at the same time as the other player can set up gravesites, they must roll off, and the winner chooses who sets up their faction terrain features or gravesites first.

        Instead of setting up a SOULBLIGHT GRAVELORDS SUMMONABLE unit on the battlefield before the battle begins, you can place it to one side and say that it is set up in the grave as a reserve unit. You can set up 1 reserve unit in the grave for each unit you have already set up on the battlefield.

        At the end of any of your movement phases, you can set up 1 or more of these units on the battlefield wholly within 12" of a gravesite and more than 9" from all enemy units. At the start of the fourth battle round, reserve units that are still in the grave are destroyed.`,
        when: [START_OF_SETUP],
        rule_sources: [rule_sources.BATTLETOME_SOULBLIGHT_GRAVELORDS, rule_sources.ERRATA_JULY_2021],
      },
      {
        name: `The Unquiet Dead`,
        desc: `At the end of any of your movement phases, you can set up 1 or more of these units (deployed in reserve using The Unquiet Dead) on the battlefield wholly within 12" of a gravesite and more than 9" from all enemy units.`,
        when: [END_OF_MOVEMENT_PHASE],
      },
      {
        name: `The Unquiet Dead`,
        desc: `At the start of the fourth battle round, reserve units that are still in the grave are destroyed.`,
        when: [TURN_FOUR_START_OF_ROUND],
      },
      {
        name: `Locus of Shyish`,
        desc: `If the unmodified casting roll for a friendly SOULBLIGHT GRAVELORDS WIZARD attempting to cast a spell from the Lore of the Deathmages or the Lore of the Vampires is 9+ and that spell is not unbound, after the effects of that spell have been resolved, you can immediately resolve the effects of that spell for a second time.`,
        when: [HERO_PHASE],
      },
      {
        name: `Deathless Minions`,
        desc: `Roll a dice each time you allocate a wound or mortal wound to a friendly SOULBLIGHT GRAVELORDS unit wholly within 12" of a friendly SOULBLIGHT GRAVELORDS HERO or gravesite. On a 6+, that wound or mortal wound is negated.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
      {
        name: `Reanimated Horrors`,
        desc: `Subtract 1 from the Bravery characteristic of enemy units while they are within 6" of 1 friendly SOULBLIGHT GRAVELORDS DEADWALKERS or SOULBLIGHT GRAVELORDS DEATHRATTLE unit. Subtract 2 from the Bravery characteristic of enemy units instead of 1 while they are within 6" of 2 or more friendly SOULBLIGHT GRAVELORDS DEADWALKERS or SOULBLIGHT GRAVELORDS DEATHRATTLE units. DEATH units are not affected by this ability.`,
        when: [BATTLESHOCK_PHASE],
      },
      {
        name: `Endless Legions`,
        desc: `At the end of the battleshock phase, count the number of enemy units that were destroyed during that turn and roll a dice, adding the number of destroyed enemy units to the roll. On a 5+, you can pick 1 friendly SOULBLIGHT GRAVELORDS SUMMONABLE DEADWALKERS or SOULBLIGHT GRAVELORDS SUMMONABLE DEATHRATTLE unit in your army that has been destroyed. If you do so, a new replacement unit with half the number of models in the unit that was destroyed (rounding up) is added to your army. Set up that unit wholly within 12" of a gravesite and more than 9" from all enemy units. Each destroyed unit can only be replaced once - replacement units cannot themselves be replaced.`,
        when: [END_OF_BATTLESHOCK_PHASE],
        rule_sources: [rule_sources.BATTLETOME_SOULBLIGHT_GRAVELORDS, rule_sources.ERRATA_JULY_2021],
      },
      {
        name: `Deathly Invocation`,
        desc: `At the start of your hero phase, you can pick a number of different friendly SOULBLIGHT GRAVELORDS SUMMONABLE units wholly within 12" of a friendly SOULBLIGHT GRAVELORDS HERO to be affected by a deathly invocation. The number of different friendly SOULBLIGHT GRAVELORDS SUMMONABLE units you can pick is determined by the keyword on that HERO's warscroll:
         
        MORTARCH    - up to 4 units
        VAMPIRE     - up to 3 units
        DEATHMAGES  - up to 2 units
        DEATHRATTLE - up to 2 units

        If the HERO has more than 1 of the above keywords on its warscroll, choose 1 of them.

        For each of the units you picked, you can heal up to D3 wounds allocated to that unit or, if no wounds are allocated to it, you can return a number of slain models to that unit that have a combined Wounds characteristic of D3 or less. Roll separately for each unit. The same unit cannot benefit from this ability more than once per turn. In addition, a unit cannot benefit from this ability and the Invocation of Nagash ability in the same turn.

        Designer's Note: Some Soulblight Gravelords abilities and spells allow you to return slain models to a unit. When you do so, set up the models one at a time within 1" of a model from their unit that was not returned to the unit earlier in the phase. Slain models can only be set up within 3" of an enemy unit if a model in the unit they are returning to that was not already returned in the same phase is already within 3" of that enemy unit. `,
        when: [START_OF_HERO_PHASE],
      },
    ],
  },

  'Legion of Blood': {
    effects: [
      {
        name: `Immortal Majesty`,
        desc: `If an enemy unit fails a battleshock test within 3" of any friendly LEGION OF BLOOD VAMPIRE units, add D3 to the number of models that flee.`,
        when: [BATTLESHOCK_PHASE],
      },
      {
        name: `Favoured Retainers`,
        desc: `Ignore negative modifiers to hit and wound rolls for attacks made with melee weapons by friendly LEGION OF BLOOD DEATHRATTLE units while they are wholly within 12" of a friendly LEGION OF BLOOD VAMPIRE unit or wholly within 18" of a friendly LEGION OF BLOOD VAMPIRE HERO that is a general.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Unparalleled Expertise`,
        desc: `When you add a LEGION OF BLOOD VAMPIRE LORD to your army, you must decide if they have martial expertise or arcane expertise. Record your choice on the army roster.
        
        Martial: Add 1 to the Attacks characteristic of a Deathlance or Vampiric Sword used by a LEGION OF BLOOD VAMPIRE LORD that has martial expertise. Add 2 to the Attacks characteristic of Soulbound Blades used by a LEGION OF BLOOD VAMPIRE LORD that has martial expertise.
        
        Arcane: Add 1 to the first casting, dispelling, or unbinding roll in each hero phase for a LEGION OF BLOOD VAMPIRE LORD that has arcane expertise and that is mounted on a Zombie Dragon. Add 2 to the first casting, dispelling, or unbinding roll in each hero phase for a LEGION OF BLOOD VAMPIRE LORD that has arcane expertise and that is not mounted on a Zombie Dragon. `,
        when: [START_OF_SETUP],
        rule_sources: [rule_sources.WHITE_DWARF_DECEMBER_2021],
      },
      {
        name: `Unparalleled Expertise (Martial)`,
        desc: `Martial: Add 1 to the Attacks characteristic of a Deathlance or Vampiric Sword used by a LEGION OF BLOOD VAMPIRE LORD that has martial expertise. Add 2 to the Attacks characteristic of Soulbound Blades used by a LEGION OF BLOOD VAMPIRE LORD that has martial expertise.`,
        when: [COMBAT_PHASE],
        rule_sources: [rule_sources.WHITE_DWARF_DECEMBER_2021],
      },
      {
        name: `Unparalleled Expertise (Arcane)`,
        desc: `Add 1 to the first casting, dispelling, or unbinding roll in each hero phase for a LEGION OF BLOOD VAMPIRE LORD that has arcane expertise and that is mounted on a Zombie Dragon. Add 2 to the first casting, dispelling, or unbinding roll in each hero phase for a LEGION OF BLOOD VAMPIRE LORD that has arcane expertise and that is not mounted on a Zombie Dragon.`,
        when: [HERO_PHASE],
        rule_sources: [rule_sources.WHITE_DWARF_DECEMBER_2021],
      },
    ],
  },

  'Legion of Night': {
    effects: [
      {
        name: `The Bait`,
        desc: `Add 1 to save rolls for attacks that target friendly LEGION OF NIGHT DEATHRATTLE and friendly LEGION OF NIGHT DEADWALKERS units in the first battle round.`,
        when: [TURN_ONE_DURING_ROUND, SAVES_PHASE],
      },
      {
        name: `Ageless Cunning`,
        desc: `Instead of setting up a LEGION OF NIGHT unit on the battlefield, you can place it to one side and say that it is set up in ambush as a reserve unit. You can set up 1 reserve unit in ambush for each unit you have already set up on the battlefield.

        At the end of any of your movement phases, you can set up 1 or more of these units on the battlefield wholly within 6" of the battlefield edge and more than 9" from all enemy units. At the start of the fourth battle round, reserve units that are still in ambush are destroyed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Ageless Cunning`,
        desc: `At the end of any of your movement phases, you can set up 1 or more of these units on the battlefield wholly within 6" of the battlefield edge and more than 9" from all enemy units.`,
        when: [END_OF_MOVEMENT_PHASE],
      },
      {
        name: `Ageless Cunning`,
        desc: `At the start of the fourth battle round, reserve units that are still in ambush are destroyed.`,
        when: [TURN_FOUR_START_OF_ROUND],
      },
    ],
  },

  'Vyrkos Dynasty': {
    effects: [
      {
        name: `The Strength Of The Pack Is The Wolf`,
        desc: `Add 1 to wound rolls for attacks made with melee weapons by friendly VYRKOS DYNASTY DEATHRATTLE and VYRKOS DYNASTY DEADWALKERS units while they are wholly within 9" of any friendly VYRKOS DYNASTY VAMPIRE HEROES.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `The Strength Of The Wolf Is The Pack`,
        desc: `You can reroll casting rolls for friendly VYRKOS DYNASTY VAMPIRE WIZARDS.`,
        when: [HERO_PHASE],
      },
    ],
  },

  'Kastelai Dynasty': {
    effects: [
      {
        name: `The Shifting Keep`,
        desc: `Instead of setting up a KASTELAI DYNASTY BLOOD KNIGHTS unit on the battlefield, you can place it to one side and say that it is set up in ambush as a reserve unit. You can set up 1 reserve unit in ambush for each unit you have already set up on the battlefield.

        At the end of any of your movement phases, you can set up 1 or more of these units on the battlefield wholly within 6" of the battlefield edge and more than 9" from all enemy units. At the start of the fourth battle round, reserve units that are still in ambush are destroyed,`,
        when: [DURING_SETUP],
      },
      {
        name: `The Shifting Keep`,
        desc: `At the end of any of your movement phases, you can set up 1 or more of your reserve units on the battlefield wholly within 6" of the battlefield edge and more than 9" from all enemy units.`,
        when: [END_OF_MOVEMENT_PHASE],
      },
      {
        name: `The Shifting Keep`,
        desc: `At the start of the fourth battle round, reserve units that are still in ambush are destroyed.`,
        when: [TURN_FOUR_START_OF_ROUND],
      },
      {
        name: `Might Of The Crimson Keep`,
        desc: `Each time the damage inflicted by an attack made with a melee weapon used by a friendly KASTELAI DYNASTY VAMPIRE unit destroys an enemy unit, that friendly unit gains the relevant ability below for the rest of the battle.

        If the enemy unit was a HERO or MONSTER - Bloodied Strength: Add 1 to the Damage characteristic of melee weapons used by that unit (excluding mounts),
        
        If the enemy unit had a Wounds characteristic of 3 or more and was not a HERO or MONSTER - Stolen Vitality: Add 1 to the Wounds characteristic of that unit.
        
        If the enemy unit had a Wounds characteristic of 2 or less - Absorbed Speed; Add 2 to run and charge rolls for that unit.`,
        when: [WOUND_ALLOCATION_PHASE],
        rule_sources: [rule_sources.BATTLETOME_SOULBLIGHT_GRAVELORDS, rule_sources.ERRATA_JULY_2021],
      },
    ],
  },

  'Avengorii Dynasty': {
    effects: [
      {
        name: `Cursed Abominations`,
        desc: `Cursed Abominations are unique enhancements. If a Soulblight Gravelords army with the AVENGORII DYNASTY keyword includes any TERRORGHEISTS or ZOMBIE DRAGONS, 1 of those models has a cursed mutation. Choose which model will have the cursed mutation, then pick from or roll on the Cursed Mutations table.`,
        when: [START_OF_SETUP],
        rule_sources: [rule_sources.BATTLETOME_SOULBLIGHT_GRAVELORDS, rule_sources.ERRATA_JULY_2021],
      },
      {
        name: `Monstrous Might`,
        desc: `Subtract 1 from wound rolls for attacks made with melee weapons that target friendly AVENGORII DYNASTY TERRORGHEISTS, AVENGORII DYNASTY ZOMBIE DRAGONS or AVENGORII DYNASTY VAMPIRE MONSTERS unless the attacking unit is a MONSTER.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Unstoppable Nightmares`,
        desc: `In the combat phase, you can pick 1 friendly AVENGORII DYNASTY TERRORGHEIST, AVENGORII DYNASTY ZOMBIE DRAGON or AVENGORII DYNASTY VAMPIRE MONSTER to unleash its monstrous power. If you do so, until the end of that phase, use the top row on that model's damage table, regardless of how many wounds it has suffered. The same model cannot benefit from this ability more than once per battle.`,
        when: [COMBAT_PHASE],
      },
    ],
  },

  'Battle Tactics': {
    effects: [
      {
        name: `Callous Overlord`,
        desc: `Pick 1 friendly SUMMONABLE unit that is more than 3" from all enemy units. You complete this battle tactic if that friendly unit is destroyed during this turn.`,
        when: [START_OF_HERO_PHASE],
        rule_sources: [rule_sources.WHITE_DWARF_DECEMBER_2021],
      },
      {
        name: `Lust for Blood`,
        desc: `You complete this battle tactic if your general or two other friendly VAMPIRE models used The Hunger and/or Mortarch of Blood ability to heal any wounds during this turn.`,
        when: [START_OF_HERO_PHASE],
        rule_sources: [rule_sources.WHITE_DWARF_DECEMBER_2021],
      },
      {
        name: `Unstoppable Armies`,
        desc: `You complete this battle tactic if, during this turn, you roll a 5+ when determining if you can replace a destroyed unit from your army using the Endless Legions battle trait.`,
        when: [START_OF_HERO_PHASE],
        rule_sources: [rule_sources.WHITE_DWARF_DECEMBER_2021],
      },
    ],
  },
}

// Always export using tagAs
export default tagAs(BattleTraits, 'battle_trait')
