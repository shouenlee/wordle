// All valid 5-letter words that can be solutions or guesses
export const WORD_BANK = [
  'ABACK', 'ABASE', 'ABATE', 'ABBEY', 'ABHOR', 'ABIDE', 'ABLED', 'ABODE', 'ABORT', 'ABOUT',
  'ABOVE', 'ABUSE', 'ABYSS', 'ACHES', 'ACIDS', 'ACORN', 'ACRES', 'ACTED', 'ACTOR', 'ACUTE',
  'ADAPT', 'ADDED', 'ADEPT', 'ADMIN', 'ADMIT', 'ADOBE', 'ADOPT', 'ADORE', 'ADULT', 'AEGIS',
  'AFFIX', 'AFIRE', 'AFOOT', 'AFTER', 'AGAIN', 'AGAPE', 'AGATE', 'AGENT', 'AGILE', 'AGING',
  'AGONY', 'AGREE', 'AHEAD', 'AIDED', 'AIMED', 'AIRED', 'AISLE', 'ALARM', 'ALBUM', 'ALERT',
  'ALIKE', 'ALIVE', 'ALAMO', 'ALLOW', 'ALONE', 'ALONG', 'ALPHA', 'ALTER', 'AMONG', 'AMBER',
  'AMEND', 'AMINO', 'AMISH', 'AMITY', 'AMPED', 'AMPLE', 'AMUSE', 'ANGEL', 'ANGER', 'ANGLE',
  'ANGRY', 'ANIME', 'ANKLE', 'ANNEX', 'ANTIC', 'ANVIL', 'AORTA', 'APART', 'APHID', 'APING',
  'APPLE', 'APPLY', 'APRON', 'APTLY', 'ARBOR', 'ARDOR', 'AREAS', 'ARENA', 'ARGUE', 'ARGON',
  'ARGOT', 'ARISE', 'ARMED', 'ARMOR', 'AROMA', 'AROSE', 'ARRAY', 'ARROW', 'ARSON', 'ARTSY',
  'ASCOT', 'ASHEN', 'ASIDE', 'ASKED', 'ASKEW', 'ASPEN', 'ASPIC', 'ASSAY', 'ASSET', 'ASTER',
  'ATLAS', 'ATOLL', 'ATOMS', 'ATONE', 'ATTIC', 'AUDIO', 'AUDIT', 'AUGUR', 'AUNTY', 'AVAIL',
  'AVERT', 'AVIAN', 'AVOID', 'AWAIT', 'AWAKE', 'AWARD', 'AWARE', 'AWASH', 'AWFUL', 'AWOKE',
  'AXIAL', 'AXIOM', 'AXION', 'AZURE',

  'BACON', 'BADGE', 'BADLY', 'BAGEL', 'BAGGY', 'BAKER', 'BALER', 'BALMY', 'BANAL', 'BANJO',
  'BARGE', 'BARON', 'BASES', 'BASIC', 'BASIL', 'BASIN', 'BASIS', 'BASTE', 'BATCH', 'BATHE',
  'BEACH', 'BEARD', 'BEAST', 'BEATS', 'BEGAN', 'BEGIN', 'BEGUN', 'BEING', 'BELCH', 'BELLE',
  'BELLS', 'BELLY', 'BELOW', 'BENCH', 'BERET', 'BERRY', 'BERTH', 'BESET', 'BETEL', 'BEVEL',
  'BEZEL', 'BIBLE', 'BICEP', 'BIDDY', 'BIGOT', 'BILGE', 'BILLS', 'BILLY', 'BINGE', 'BINGO',
  'BIOME', 'BIRCH', 'BIRTH', 'BISON', 'BITTY', 'BLACK', 'BLADE', 'BLAME', 'BLAND', 'BLANK',
  'BLARE', 'BLAST', 'BLAZE', 'BLEAK', 'BLEAT', 'BLEED', 'BLEEP', 'BLEND', 'BLESS', 'BLIMP',
  'BLIND', 'BLING', 'BLINK', 'BLISS', 'BLITZ', 'BLOAT', 'BLOCK', 'BLOKE', 'BLOND', 'BLOOD',
  'BLOOM', 'BLOWN', 'BLUER', 'BLUFF', 'BLUNT', 'BLURB', 'BLURT', 'BLUSH', 'BOARD', 'BOAST',
  'BOBBY', 'BONEY', 'BOOST', 'BOOTH', 'BOUND', 'BRAIN', 'BRAND', 'BREAD', 'BREAK', 'BREED',
  'BRIEF', 'BRING', 'BRINK', 'BRISK', 'BROAD', 'BROIL', 'BROKE', 'BROOD', 'BROOK', 'BROOM',
  'BROTH', 'BROWN', 'BRUSH', 'BUILD', 'BUILT', 'BULGE', 'BUNCH', 'BUNNY', 'BURKE', 'BURST',
  'BUYER',

  'CABIN', 'CABLE', 'CACHE', 'CADET', 'CAGED', 'CAKES', 'CALIF', 'CALLS', 'CALMS', 'CAMEL',
  'CANAL', 'CANDY', 'CANNY', 'CANOE', 'CANON', 'CARDS', 'CARES', 'CARGO', 'CAROL', 'CARRY',
  'CASES', 'CASTE', 'CATCH', 'CATER', 'CAUSE', 'CEDAR', 'CELLO', 'CELLS', 'CENTS', 'CHAIN',
  'CHAIR', 'CHALK', 'CHAMP', 'CHART', 'CHASE', 'CHEAP', 'CHEAT', 'CHECK', 'CHEST', 'CHIEF',
  'CHILD', 'CHILL', 'CHINA', 'CHIPS', 'CHOIR', 'CHOSE', 'CHUCK', 'CIDER', 'CIGAR', 'CIVIC',
  'CIVIL', 'CLAIM', 'CLAMP', 'CLANS', 'CLASS', 'CLEAN', 'CLEAR', 'CLERK', 'CLICK', 'CLIFF',
  'CLIMB', 'CLING', 'CLOCK', 'CLONE', 'CLOSE', 'CLOTH', 'CLOUD', 'CLOUT', 'CLOVE', 'CLOWN',
  'CLUBS', 'COACH', 'COAST', 'COBRA', 'CODES', 'COILS', 'COINS', 'COLOR', 'COMET', 'COMIC',
  'CONDO', 'CORAL', 'CORPS', 'COSTS', 'COUCH', 'COUGH', 'COULD', 'COUNT', 'COURT', 'COVER',
  'CRACK', 'CRAFT', 'CRANE', 'CRANK', 'CRASH', 'CRATE', 'CRAVE', 'CRAWL', 'CRAZY', 'CREAM',
  'CREEK', 'CREEP', 'CREST', 'CREWS', 'CRISP', 'CROSS', 'CROWD', 'CROWN', 'CRUDE', 'CRUEL',
  'CRUSH', 'CRUST', 'CRYPT', 'CUBIC', 'CURRY', 'CURVE', 'CYCLE',

  'DAILY', 'DAIRY', 'DANCE', 'DATED', 'DEALS', 'DEALT', 'DEATH', 'DEBIT', 'DEBUG', 'DEBUT',
  'DECAY', 'DECOR', 'DECOY', 'DELAY', 'DELTA', 'DEMON', 'DENSE', 'DEPTH', 'DERBY', 'DESERT',
  'DIGIT', 'DIMLY', 'DINER', 'DIRTY', 'DISCO', 'DITCH', 'DIVER', 'DIZZY', 'DODGE', 'DOING',
  'DONOR', 'DOORS', 'DOUBT', 'DOUGH', 'DOZEN', 'DRAFT', 'DRAIN', 'DRAMA', 'DRANK', 'DRAWN',
  'DREAM', 'DRESS', 'DRIFT', 'DRILL', 'DRINK', 'DRIVE', 'DRONE', 'DROVE', 'DRUNK', 'DRYER',
  'DUCKS', 'DUMMY', 'DUNCE', 'DUSTY', 'DWARF', 'DYING',

  'EAGER', 'EAGLE', 'EARLY', 'EARTH', 'EIGHT', 'ELBOW', 'ELDER', 'ELECT', 'ELITE', 'EMAIL',
  'EMPTY', 'ENDED', 'ENEMY', 'ENJOY', 'ENTER', 'ENTRY', 'EQUAL', 'EQUIP', 'ERASE', 'ERROR',
  'ESSAY', 'ETHIC', 'EVENT', 'EVERY', 'EXACT', 'EXAMS', 'EXCEL', 'EXIST', 'EXTRA', 'EXULT',

  'FACES', 'FACTS', 'FADED', 'FAILS', 'FAINT', 'FAIRY', 'FAITH', 'FALSE', 'FANCY', 'FATAL',
  'FAULT', 'FAVOR', 'FEAST', 'FETCH', 'FEVER', 'FIBER', 'FIELD', 'FIERY', 'FIFTH', 'FIFTY',
  'FIGHT', 'FILES', 'FILMS', 'FINAL', 'FIRST', 'FIXED', 'FLAME', 'FLASH', 'FLEET', 'FLESH',
  'FLOAT', 'FLOCK', 'FLOOD', 'FLOOR', 'FLOUR', 'FLUID', 'FLUSH', 'FLUTE', 'FOCUS', 'FOLKS',
  'FORCE', 'FORGE', 'FORMS', 'FORTH', 'FORTY', 'FORUM', 'FOUND', 'FRAME', 'FRANK', 'FRAUD',
  'FRESH', 'FRONT', 'FROST', 'FRUIT', 'FULLY', 'FUNDS', 'FUNNY', 'FUSED',

  'GAINS', 'GAMES', 'GAMMA', 'GATES', 'GAUGE', 'GEARS', 'GHOST', 'GIANT', 'GIFTS', 'GIVEN',
  'GLASS', 'GLOBE', 'GLORY', 'GLOVE', 'GOALS', 'GOING', 'GRACE', 'GRADE', 'GRAIN', 'GRAND',
  'GRANT', 'GRAPE', 'GRAPH', 'GRASS', 'GRAVE', 'GREAT', 'GREEN', 'GREET', 'GRIEF', 'GRILL',
  'GRIND', 'GRIPS', 'GROSS', 'GROUP', 'GROVE', 'GROWN', 'GUARD', 'GUESS', 'GUEST', 'GUIDE',
  'GUILD', 'GUILT', 'GUISE',

  'HABIT', 'HANDS', 'HANDY', 'HAPPY', 'HARSH', 'HASTE', 'HASTY', 'HATCH', 'HAVEN', 'HEART',
  'HEAVY', 'HEDGE', 'HELLO', 'HELPS', 'HENCE', 'HERBS', 'HIGHS', 'HILLS', 'HINTS', 'HIRED',
  'HOBBY', 'HOLDS', 'HOLES', 'HOLLY', 'HOMES', 'HONEY', 'HONOR', 'HOOKS', 'HOPED', 'HOPES',
  'HORNS', 'HORSE', 'HOSTS', 'HOTEL', 'HOURS', 'HOUSE', 'HOVER', 'HUMAN', 'HUMOR', 'HURRY',

  'ICONS', 'IDEAL', 'IDEAS', 'IMAGE', 'INDEX', 'INDIE', 'INNER', 'INPUT', 'IRONY', 'ISSUE',
  'ITEMS',

  'JEANS', 'JOINT', 'JOKES', 'JUDGE', 'JUICE', 'JUMPS', 'JUNKY',

  'KEEPS', 'KICKS', 'KILLS', 'KINDS', 'KINGS', 'KNEES', 'KNIFE', 'KNOCK', 'KNOTS', 'KNOWN',

  'LABEL', 'LABOR', 'LACKS', 'LAKES', 'LAMPS', 'LANDS', 'LANES', 'LARGE', 'LASER', 'LASTS',
  'LATER', 'LAUGH', 'LAYER', 'LEADS', 'LEAKS', 'LEARN', 'LEASE', 'LEAST', 'LEAVE', 'LEGAL',
  'LEMON', 'LEVEL', 'LEVER', 'LIGHT', 'LIKES', 'LIMBS', 'LIMIT', 'LINED', 'LINES', 'LINKS',
  'LIONS', 'LISTS', 'LIVED', 'LIVES', 'LOCAL', 'LOCKS', 'LODGE', 'LOGIC', 'LOOSE', 'LORDS',
  'LOSES', 'LOVED', 'LOVER', 'LOVES', 'LOWER', 'LOYAL', 'LUCKY', 'LUNAR', 'LUNCH', 'LUNGS',
  'LYING',

  'MAGIC', 'MAJOR', 'MAKER', 'MAKES', 'MALES', 'MAPLE', 'MARCH', 'MARKS', 'MARRY', 'MASKS',
  'MATCH', 'MATES', 'MAYBE', 'MAYOR', 'MEALS', 'MEANS', 'MEANT', 'MEDAL', 'MEDIA', 'MEETS',
  'MELEE', 'MENUS', 'MERCY', 'MERGE', 'MERIT', 'MERRY', 'MESSY', 'METAL', 'METER', 'METRO',
  'MICRO', 'MIDST', 'MIGHT', 'MILES', 'MINDS', 'MINES', 'MINOR', 'MINUS', 'MIXED', 'MODEL',
  'MODES', 'MOIST', 'MONEY', 'MONTH', 'MORAL', 'MOTOR', 'MOUNT', 'MOUSE', 'MOUTH', 'MOVED',
  'MOVES', 'MOVIE', 'MUSIC', 'MYTHS',

  'NAILS', 'NAKED', 'NAMES', 'NASAL', 'NAVAL', 'NEEDS', 'NERVE', 'NEVER', 'NEWER', 'NEWLY',
  'NEXUS', 'NIGHT', 'NOBLE', 'NODES', 'NOISE', 'NORTH', 'NOTED', 'NOTES', 'NOVEL', 'NURSE',

  'OCEAN', 'OFFER', 'OFTEN', 'OLDER', 'OLIVE', 'OMEGA', 'ONION', 'ONSET', 'OPENS', 'OPERA',
  'ORBIT', 'ORDER', 'ORGAN', 'OTHER', 'OUGHT', 'OUTER', 'OWNED', 'OWNER', 'OXIDE',

  'PACKS', 'PAGES', 'PAINS', 'PAINT', 'PAIRS', 'PANEL', 'PANIC', 'PANTS', 'PAPER', 'PARKS',
  'PARTS', 'PARTY', 'PASTA', 'PASTE', 'PATCH', 'PATHS', 'PAUSE', 'PEACE', 'PEAKS', 'PEARL',
  'PEDAL', 'PEERS', 'PENNY', 'PHASE', 'PHONE', 'PHOTO', 'PIANO', 'PICKS', 'PIECE', 'PILES',
  'PILOT', 'PINCH', 'PIPES', 'PITCH', 'PIZZA', 'PLACE', 'PLAIN', 'PLANE', 'PLANS', 'PLANT',
  'PLATE', 'PLAYS', 'PLAZA', 'PLOTS', 'PLUGS', 'POEMS', 'POINT', 'POKER', 'POLAR', 'POLES',
  'POLLS', 'POOLS', 'PORCH', 'PORTS', 'POSED', 'POSES', 'POSTS', 'POUND', 'POWER', 'PRESS',
  'PRICE', 'PRIDE', 'PRIME', 'PRINT', 'PRIOR', 'PRIZE', 'PROBE', 'PRONE', 'PROOF', 'PROPS',
  'PROSE', 'PROUD', 'PROVE', 'PROXY', 'PULLS', 'PULSE', 'PUMPS', 'PUNCH', 'PUPIL', 'PUPPY',
  'PURSE',

  'QUEEN', 'QUERY', 'QUEST', 'QUEUE', 'QUICK', 'QUIET', 'QUILT', 'QUITE', 'QUOTE',

  'RACES', 'RACKS', 'RADAR', 'RADIO', 'RAILS', 'RAISE', 'RALLY', 'RANCH', 'RANGE', 'RANKS',
  'RAPID', 'RATED', 'RATES', 'RATIO', 'RAZOR', 'REACH', 'REACT', 'READS', 'READY', 'REALM',
  'REBEL', 'REFER', 'REIGN', 'RELAX', 'RELAY', 'RENAL', 'RENEW', 'REPLY', 'RESET', 'RESIN',
  'RETRY', 'REUSE', 'RHYME', 'RIDER', 'RIDES', 'RIDGE', 'RIFLE', 'RIGHT', 'RIGID', 'RINGS',
  'RINSE', 'RISEN', 'RISES', 'RISKS', 'RISKY', 'RIVAL', 'RIVER', 'ROADS', 'ROBOT', 'ROCKS',
  'ROCKY', 'ROGUE', 'ROLES', 'ROLLS', 'ROMAN', 'ROOMS', 'ROOTS', 'ROPES', 'ROSES', 'ROUGH',
  'ROUND', 'ROUTE', 'ROYAL', 'RUGBY', 'RUINS', 'RULED', 'RULER', 'RULES', 'RURAL', 'RUSTY',

  'SACKS', 'SADLY', 'SAFER', 'SAINT', 'SALAD', 'SALES', 'SALON', 'SALTY', 'SANDS', 'SANDY',
  'SAUCE', 'SAVED', 'SAVES', 'SCALE', 'SCALP', 'SCARE', 'SCENE', 'SCENT', 'SCOPE', 'SCORE',
  'SCOUT', 'SCRAP', 'SCREW', 'SEALS', 'SEAMS', 'SEATS', 'SEEDS', 'SEEKS', 'SEEMS', 'SELLS',
  'SENDS', 'SENSE', 'SERUM', 'SERVE', 'SETUP', 'SEVEN', 'SEWER', 'SHADE', 'SHAFT', 'SHAKE',
  'SHALL', 'SHAME', 'SHAPE', 'SHARE', 'SHARK', 'SHARP', 'SHEEP', 'SHEER', 'SHEET', 'SHELF',
  'SHELL', 'SHIFT', 'SHINE', 'SHIPS', 'SHIRT', 'SHOCK', 'SHOES', 'SHOOT', 'SHOPS', 'SHORE',
  'SHORT', 'SHOTS', 'SHOWN', 'SHOWS', 'SIDES', 'SIEGE', 'SIGHT', 'SIGNS', 'SILLY', 'SINCE',
  'SITES', 'SIXTH', 'SIZED', 'SIZES', 'SKIES', 'SKILL', 'SKINS', 'SKIRT', 'SKULL', 'SLATE',
  'SLAVE', 'SLEEP', 'SLEPT', 'SLICE', 'SLIDE', 'SLOPE', 'SLOTS', 'SMALL', 'SMART', 'SMELL',
  'SMILE', 'SMOKE', 'SNAKE', 'SNEAK', 'SOCKS', 'SOLAR', 'SOLID', 'SOLVE', 'SONGS', 'SONIC',
  'SORRY', 'SORTS', 'SOULS', 'SOUND', 'SOUTH', 'SPACE', 'SPARE', 'SPARK', 'SPEAK', 'SPEED',
  'SPELL', 'SPEND', 'SPENT', 'SPICE', 'SPIKE', 'SPINE', 'SPITE', 'SPLIT', 'SPOKE', 'SPOON',
  'SPORT', 'SPOTS', 'SPRAY', 'STACK', 'STAFF', 'STAGE', 'STAIN', 'STAKE', 'STAMP', 'STAND',
  'STARK', 'STARS', 'START', 'STATE', 'STAYS', 'STEAL', 'STEAM', 'STEEL', 'STEEP', 'STEER',
  'STEMS', 'STEPS', 'STICK', 'STIFF', 'STILL', 'STOCK', 'STOLE', 'STONE', 'STOOD', 'STOPS',
  'STORE', 'STORM', 'STORY', 'STRAP', 'STRAW', 'STRIP', 'STUCK', 'STUDY', 'STUFF', 'STYLE',
  'SUGAR', 'SUITE', 'SUITS', 'SUNNY', 'SUPER', 'SURGE', 'SUSHI', 'SWAMP', 'SWEAR', 'SWEAT',
  'SWEET', 'SWEPT', 'SWIFT', 'SWING', 'SWISS', 'SWORD', 'SWORE',

  'TABLE', 'TAKEN', 'TAKES', 'TALES', 'TALKS', 'TANKS', 'TAPES', 'TASKS', 'TASTE', 'TASTY',
  'TAXES', 'TEACH', 'TEAMS', 'TEARS', 'TEETH', 'TELLS', 'TEMPO', 'TENDS', 'TENTH', 'TERMS',
  'TESTS', 'TEXAS', 'THANK', 'THEFT', 'THEIR', 'THEME', 'THERE', 'THESE', 'THICK', 'THIEF',
  'THIGH', 'THING', 'THINK', 'THIRD', 'THOSE', 'THREE', 'THREW', 'THROW', 'THUMB', 'TIGER',
  'TIGHT', 'TILES', 'TIMER', 'TIMES', 'TIRED', 'TIRES', 'TITLE', 'TODAY', 'TOKEN', 'TONES',
  'TOOLS', 'TOOTH', 'TOPIC', 'TORCH', 'TOTAL', 'TOUCH', 'TOUGH', 'TOWER', 'TOWNS', 'TOXIC',
  'TRACE', 'TRACK', 'TRACT', 'TRADE', 'TRAIL', 'TRAIN', 'TRAIT', 'TRANS', 'TRAPS', 'TRASH',
  'TREAT', 'TREES', 'TREND', 'TRIAL', 'TRIBE', 'TRICK', 'TRIED', 'TRIES', 'TRIPS', 'TROOP',
  'TRUCK', 'TRULY', 'TRUNK', 'TRUST', 'TRUTH', 'TUBES', 'TUMOR', 'TUNED', 'TURNS', 'TWICE',
  'TWINS', 'TWIST', 'TYPES',

  'ULTRA', 'UNCLE', 'UNDER', 'UNION', 'UNITE', 'UNITS', 'UNITY', 'UNTIL', 'UPPER', 'UPSET',
  'URBAN', 'URGED', 'URINE', 'USAGE', 'USERS', 'USING', 'USUAL',

  'VAGUE', 'VALID', 'VALUE', 'VALVE', 'VAPOR', 'VAULT', 'VEGAN', 'VEINS', 'VENUE', 'VERSE',
  'VIDEO', 'VIEWS', 'VILLA', 'VINYL', 'VIRAL', 'VIRUS', 'VISIT', 'VITAL', 'VIVID', 'VOCAL',
  'VOICE', 'VOLTS', 'VOTED', 'VOTER', 'VOTES',

  'WAGES', 'WAGON', 'WAIST', 'WALKS', 'WALLS', 'WANTS', 'WARNS', 'WASTE', 'WATCH', 'WATER',
  'WATTS', 'WAVES', 'WEARS', 'WEARY', 'WEEKS', 'WEIRD', 'WELLS', 'WELSH', 'WHALE', 'WHEAT',
  'WHEEL', 'WHERE', 'WHICH', 'WHILE', 'WHITE', 'WHOLE', 'WHOSE', 'WIDER', 'WIDOW', 'WIDTH',
  'WINDS', 'WINDY', 'WINES', 'WINGS', 'WIPED', 'WIRED', 'WIRES', 'WITCH', 'WIVES', 'WOMAN',
  'WOMEN', 'WOODS', 'WORDS', 'WORKS', 'WORLD', 'WORMS', 'WORRY', 'WORSE', 'WORST', 'WORTH',
  'WOULD', 'WOUND', 'WRATH', 'WRIST', 'WRITE', 'WRONG', 'WROTE',

  'XENON',

  'YARDS', 'YEARS', 'YEAST', 'YIELD', 'YOUNG', 'YOURS', 'YOUTH',

  'ZEBRA', 'ZEROS', 'ZONES'
]; 