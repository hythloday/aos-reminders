import { tagAs } from 'factions/metatagger'
import { END_OF_GAME, START_OF_GAME } from 'types/phases'

const GrandStrategies = {
  'Make the Land Tremble': {
    effects: [
      {
        name: `Make the Land Tremble`,
        desc: `When the battle ends, you complete this grand strategy if any friendly units made a run or charge move in every battle round (it does not have to be the same unit that runs or makes a charge move in every battle round).`,
        when: [END_OF_GAME],
      },
    ],
  },
  "Brodd's Revenge": {
    effects: [
      {
        name: `Brodd's Revenge`,
        desc: `You can only pick this grand strategy if your army includes King Brodd. When the battle ends,you complete this grand strategy if the friendly KING BRODD has not been slain and you picked each of the 3 effects of the Power of Behemat prayer to apply at least once during the battle.`,
        when: [END_OF_GAME],
      },
    ],
  },
  'On the Warpath': {
    effects: [
      {
        name: `Brodd's Revenge`,
        desc: `When the battle ends, you complete this grand strategy if every friendly unit on the battlefield is within enemy territory.`,
        when: [END_OF_GAME],
      },
    ],
  },
  "Show 'Em Who's Boss!": {
    effects: [
      {
        name: `Brodd's Revenge`,
        desc: `At the start of the battle, the enemy unit with the highest Wounds characteristic is marked as the big'un. If there are multiple enemy units tied for the highest Wounds
        characteristic, you can pick which of these will be the big'un. When the battle ends, you complete this grand strategy if the big'un has been slain and the model chosen to be your general has not been slain.`,
        when: [START_OF_GAME, END_OF_GAME],
      },
    ],
  },
}

export default tagAs(GrandStrategies, 'grand_strategy')
