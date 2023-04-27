import { Faction } from 'factions/factionClass'
import { pickEffects } from 'factions/metatagger'
import { DEATH } from 'meta/alliances'
import { SPOOKYBAT_GROANLADS } from 'meta/factions'
import battle_traits from './battle_traits'
import rule_sources from './rule_sources'
import SubFactions from './subfactions'

export const SpookybatGroanladsFaction = new Faction(
  SPOOKYBAT_GROANLADS,
  DEATH,
  SubFactions,
  'Lineages',
  rule_sources.BATTLETOME_SPOOKYBAT_GROANLADS,
  pickEffects(battle_traits, [SPOOKYBAT_GROANLADS, 'Battle Tactics'])
)
