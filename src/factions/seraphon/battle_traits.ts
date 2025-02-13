import { tagAs } from 'factions/metatagger'
import { SERAPHON } from 'meta/factions'
import meta_rule_sources from 'meta/rule_sources'
import {
  BATTLESHOCK_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  END_OF_HERO_PHASE,
  END_OF_MOVEMENT_PHASE,
  HERO_PHASE,
  START_OF_HERO_PHASE,
  START_OF_SETUP,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'
import rule_sources from './rule_sources'

const BattleTraits = {
  [SERAPHON]: {
    effects: [
      {
        name: `Contemplations of the Ancient Ones`,
        desc: `At the end of your hero phase, you can pick 1 friendly SLANN and replace the spell they know from the Lore of Celestial Domination table (pg 60) with a new spell from that table. Choose or roll for the new spell, rolling again if you generate the spell the SLANN already had.`,
        when: [END_OF_HERO_PHASE],
      },
      {
        name: `Sacred Asterisms`,
        desc: `At the start of your hero phase, you can pick 1 of the following asterisms to be in the ascendant until your next hero phase:

                The Great Drake: In the combat phase, pick 1 friendly SERAPHON HERO. Until the end of that phase, you can add 1 to the Attacks characteristic of melee weapons used by that HERO.
                The Hunter's Steed: Add 1 to run rolls and charge rolls for friendly SERAPHON units.
                The Sage's Staff: At the start of the hero phase, pick 1 friendly SERAPHON WIZARD. You can add 1 to casting or dispelling rolls for that WIZARD if it is your hero phase, and you can add 1 to unbinding rolls for that WIZARD if it is the enemy hero phase.`,
        when: [START_OF_HERO_PHASE],
        rule_sources: [
          rule_sources.BATTLETOME_SERAPHON,
          rule_sources.ERRATA_JANUARY_2021,
          rule_sources.ERRATA_JULY_2021,
        ],
      },
    ],
  },
  COALESCED: {
    effects: [
      {
        name: 'COALESCED',
        desc: `If your army is a COALESCED army, you can give it the KOATL'S CLAW or THUNDER LIZARD keyword. All COALESCED units in your army gain that keyword and you can use the extra abilities listed for that Constellation.`,
        when: [START_OF_SETUP],
      },
      {
        name: `Cold-blooded`,
        desc: `Ignore modifiers (positive or negative) to the Bravery characteristic of COALESCED units.`,
        when: [BATTLESHOCK_PHASE],
      },
      {
        name: `Predatory Fighters`,
        desc: `Add 1 to the Attacks characteristic of Jaws weapons used by COALESCED units.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Primeval Domain`,
        desc: `If a terrain feature is partially or wholly within the territory of a COALESCED army, then it has the Mystical and Deadly Mysterious Terrain scenery rules (section 28.1.3 of the core rules) in addition to any other Mysterious Terrain scenery rules it may have. The Mystical scenery rule for these terrain features only applies to COALESCED units, while the Deadly scenery rule for these terrain not apply to COALESCED units.`,
        when: [DURING_GAME],
        rule_sources: [
          rule_sources.BATTLETOME_SERAPHON,
          rule_sources.ERRATA_JULY_2021,
          rule_sources.WHITE_DWARF_OCTOBER_2021,
        ],
      },
      {
        name: `Scaly Skin`,
        desc: `Subtract 1 from the damage inflicted by each successful attack that targets a COALESCED unit that has the SAURUS, KROXIGOR or MONSTER keyword (to a minimum of 1).`,
        when: [WOUND_ALLOCATION_PHASE],
        rule_sources: [
          rule_sources.BATTLETOME_SERAPHON,
          rule_sources.ERRATA_JULY_2022,
          meta_rule_sources.BATTLESCROLL_GALLETIAN_CHAMPIONS_JANUARY_2023,
        ],
      },
    ],
  },
  STARBORNE: {
    effects: [
      {
        name: `Unfeeling`,
        desc: `STARBORNE units have a Bravery characteristic of 10 instead of the Bravery characteristic on their warscroll.`,
        when: [BATTLESHOCK_PHASE],
      },
      {
        name: `Celestial Conjuration`,
        desc: `You can summon STARBORNE units to the battlefield if you collect enough celestial conjuration points (CCPs). At the start of your hero phase you receive D3 celestial conjuration points if your general is a SLANN or STARSEER and is on the battlefield, and D3 CCP if there are one or more friendly SAURUS ASTROLITH BEARERS on the battlefield.`,
        when: [START_OF_HERO_PHASE],
      },
      {
        name: `Celestial Conjuration`,
        desc: `In addition, in your hero phase, before attempting to cast the first spell with each friendly SLANN or ORACLE, you can say that it will carry out a celestial conjuration. If you do so, you receive D3 celestial conjuration points but the number of spells which that model can attempt to cast in that phase is reduced by 1.`,
        when: [HERO_PHASE],
      },
      {
        name: `Celestial Conjuration`,
        desc: `If you have 6 or more celestial conjuration points at the end of your movement phase, you can summon 1 or more units from the conjuration list to the battlefield and add them to your army. Each unit you summon costs a number of celestial conjuration points as shown on the list, and you can only summon a unit if you have enough celestial conjuration points to pay its cost.

            Summoned units must be set up wholly within 12" of a friendly SLANN, friendly ORACLE or friendly SAURUS ASTROLITH BEARER and more than 9" from any enemy units. Subtract the cost of the summoned unit from the number of celestial conjuration points you have immediately after the summoned unit has been set up. Summoned units have the STARBORNE keyword.`,
        when: [END_OF_MOVEMENT_PHASE],
      },
      {
        name: `Lords of Space and Time`,
        desc: `At the end of your movement phase, you can pick 1 friendly STARBORNE unit anywhere on the battlefield to be transported through space and time.

            If you do so, remove that unit from the battlefield and then set it up on the battlefield anywhere that is more than 9" from any enemy unit.`,
        when: [END_OF_MOVEMENT_PHASE],
      },
      {
        name: `Starborne Constellations`,
        desc: `If your army is a STARBORNE army, you can give it the DRACOTHION'S TAIL or FANGS OF SOTEK keyword. All STARBORNE units in your army gain that keyword and you can use the extra abilities listed for that Constellation.`,
        when: [START_OF_SETUP],
      },
    ],
  },

  'Battle Tactics': {
    effects: [
      {
        name: `Might of the Starborne`,
        desc: `Pick 1 objective on the battlefield. You complete this battle tactic if you summon a friendly unit that has a CCP cost of 20 or more during the turn, and that unit is wholly within 12" of the objective you picked.`,
        when: [START_OF_HERO_PHASE],
        rule_sources: [rule_sources.WHITE_DWARF_OCTOBER_2021],
      },
      {
        name: `Stampede of Scales`,
        desc: `Pick 3 different friendly MONSTERS. You complete this battle tactic if all of the units you picked run in the following movement phase and finish that run within 6" of each other and wholly within enemy territory.`,
        when: [START_OF_HERO_PHASE],
        rule_sources: [rule_sources.WHITE_DWARF_OCTOBER_2021],
      },
    ],
  },
}

export default tagAs(BattleTraits, 'battle_trait')
