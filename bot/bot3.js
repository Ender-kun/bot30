const https = require('https');
const Discord = require('discord.js');
const client = new Discord.Client()
const fs = require("fs");
const Canvas = require("canvas")
const AntiSpam = require('discord-anti-spam');
var level0 = "/100";
var level1 = "/200";
var level2 = "/400";
var level3 = "/600";
var level4 = "/800";
var level5 = "/100";
var level6 = "/100";
var level7 = "/100";
var level8 = "/100";
var level9 = "/100";
var level10 = "/100";
var protect = false
var protectadv = false
var allprot = false
var mom = ['a','b','c','d','e','f','g','h','i','j','k','o','p','r','s','t','v','w','x','y','z','m','n']
var huy = 0
var vasya = 0
var cat = 0
var nig = 0
var list = [ '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '☺️',
  '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰' ,
  '😘', '😗', '😙', '😚', '😋', '😛', '😝', '😜', '🤪',
  '🤨', '🧐', '🤓', '😎', '🤩', '🥳' , '😏', '😒', '😞',
  '😔', '😟', '😕', '🙁', '☹️',  '😣', '😖', '😫', '😩',
  '🥺' , '😢', '😭', '😤', '😠', '😡', '🤬', '🤯', '😳',
  '🥵' , '🥶' , '😱', '😨', '😰', '😥', '😓', '🤗', '🤔',
  '🤭', '🥱' , '🤫', '🤥', '😶', '😐', '😑', '😬', '🙄',
  '😯', '😦', '😧', '😮', '😲', '😴', '🤤', '😪', '😵',
  '🤐', '🥴' , '🤢', '🤮', '🤧', '😷', '🤒', '🤕', '🤑',
  '🤠','❤️',  '🧡', '💛', '💚', '💙', '💜', '🖤', '🤎' ,
  '🤍' , '💔', '❣️',  '💕', '💞', '💓', '💗', '💖',
  '💘', '💝', '💟', '☮️',  '✝️',  '☪️',  '🕉️' ,  '☸️',
  '✡️',  '🔯', '🕎', '☯️',  '☦️',  '🛐', '⛎', '♈',
  '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐',
  '♑', '♒', '♓', '🆔', '⚛️',  '🉑', '☢️',  '☣️',
  '📴', '📳', '🈶', '🈚', '🈸', '🈺', '🈷️', '✴️',
  '🆚', '💮', '🉐', '㊙️', '㊗️', '🈴', '🈵','🈹', '🈲', '🅰️',  '🅱️',  '🆎', '🆑', '🅾️',  '🆘', '❌',
  '⭕', '🛑', '⛔', '📛', '🚫', '💯', '💢', '♨️',  '🚷',
  '🚯', '🚳', '🚱', '🔞', '📵', '🚭', '❗', '❕', '❓',
  '❔', '‼️',  '⁉️',  '🔅', '🔆', '〽️', '⚠️',  '🚸', '🔱',
  '⚜️',  '🔰', '♻️',  '✅', '🈯', '💹', '❇️',  '✳️',  '❎',
  '🌐', '💠', 'Ⓜ️',  '🌀', '💤', '🏧', '🚾', '♿', '🅿️',
  '🈳', '🈂️', '🛂', '🛃', '🛄', '🛅', '🛗' , '🚹', '🚺',
  '🚼', '🚻', '🚮', '🎦', '📶', '🈁', '🔣', 'ℹ️',  '🔤',
  '🔡', '🔠', '🆖', '🆗', '🆙', '🆒', '🆕', '🆓', '0️⃣',  '1️⃣',  '2️⃣',  '3️⃣',  '4️⃣',  '5️⃣',  '6️⃣',
  '7️⃣',  '8️⃣',  '9️⃣',  '🔟', '🔢', '#️⃣',  '*️⃣',  '⏏️',  '▶️',  '⏸️',
  '⏯️',  '⏹️',  '⏺️',  '⏭️',  '⏮️',  '⏩', '⏪', '⏫', '⏬', '◀️',
  '🔼', '🔽', '➡️',  '⬅️',  '⬆️',  '⬇️',  '↗️',  '↘️',  '↙️',  '↖️',
  '↕️',  '↔️',  '↪️',  '↩️',  '⤴️',  '⤵️',  '🔀', '🔁', '🔂', '🔄',
  '🔃', '🎵', '🎶', '➕', '➖', '➗', '✖️',  '♾️',  '💲', '💱',
  '™️',  '©️',  '®️',  '〰️', '➰', '➿', '🔚', '🔙', '🔛', '🔝',
  '🔜', '✔️',  '☑️',  '🔘', '⚪', '⚫', '🔴', '🔵', '🟤' , '🟣' ,
  '🟢' , '🟡' , '🟠' , '🔺','🔻', '🔸', '🔹', '🔶', '🔷', '🔳', '🔲', '▪️',  '▫️',
  '◾', '◽', '◼️',  '◻️',  '⬛', '⬜', '🟧' , '🟦' , '🟥' ,
  '🟫' , '🟪' , '🟩' , '🟨' , '🔈', '🔇', '🔉', '🔊', '🔔',
  '🔕', '📣', '📢', '🗨️' ,  '👁‍🗨'  , '💬', '💭', '🗯️' ,  '♠️',
  '♣️',  '♥️',  '♦️',  '🃏', '🎴', '🀄', '🕐', '🕑', '🕒',
  '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕛',
  '🕜', '🕝', '🕞', '🕟', '🕠', '🕡', '🕢', '🕣', '🕤',
  '🕥', '🕦', '🕧', '♀️',  '♂️',  '⚧',  '⚕️',  '🇿' , '🇾' ,
  '🇽' , '🇼' , '🇻' , '🇺' , '🇹','🇸' , '🇷' , '🇶' , '🇵' ,
  '🇴' , '🇳' , '🇲' , '🇱' ,
  '🇰' , '🇯' , '🇮' , '🇭' ,
  '🕷️','🕸️','🦂','🐢','🐍','🦎','🦖','🦕','🐙','🐬','🦐','🦞','🦀','🐡','🐠','🐟','🦭','🐬','🐳','🐋','🦈','🐊','🐅','🐆','🦓','🦍','🦧','🐘','🐃','🦬','🦛','🦏','🐪','🐫','🦒','🦘','🐃','🐂','🐄','🐎','🐖','🐏','🐑','🦙','🐐','🦌','🐕','🐩','🦮','🐕‍🦺',
  '🇬' , '🇫' , '🇪' , '🇩' ,
  '🇨' , '🇧' , '🇦','😈','👿','👹','👺','🤡','💩','👻','💀','☠️','👽','👾','🤖','🎃','😺','😸','😹','😻','😼',
  '😽','🙀','😿','😾','🤲','👐','🙌','👏','🤝','👍','👎','👊','✊','🤛','🤜','🤞','✌️','🤟','🤘','👌','🤏','🤌','👈','👉','👆','👇','☝️','✋','🤚','🖐️',
'🖖','👋','🤙','🧑','👨','🧑‍🦱','👩‍🦱','👨‍🦱','🧑‍🦰','👩‍🦰','👨‍🦰','👱‍♀️','👱','👱‍♂️','🧑‍🦳','👩‍🦳','👨‍� ','🧑‍','🦲','👩‍🦲',
'👵','🧓','👴','👲','👳','👳‍♀️','👳‍♂️','🧕','👮','👮‍♀️',
'💂‍♂️','🕵️','🕵️‍♀️','🕵️‍♂️','🧑‍⚕️','👩‍⚕️','👨‍⚕️','🧑‍🌾','👩‍🌾','👨‍🌾','🧑‍🍳','👩‍🍳','👨‍🍳','🧑','‍🎓','👩‍🎓','👨‍🎓','🧑‍🎤','👩‍🎤','👨‍🎤',
'🧑‍🏫','👩‍🏫','👨‍🏫','🧑‍🏭','👩‍🏭','👨‍🏭','🧑‍💻','👩‍💻','👨‍💻','🧑‍💼','👩‍💼','👨‍💼','🧑‍🔧','👩‍🔧','👨‍🔧','👩‍🔧','🧑‍🔬','👩‍🔬','👨‍🔬','🦹‍♀️','🦹‍♂️',
'🥷','🧑‍🎄','🤶','🎅','🧙','🧙‍♀️','🧙‍♂️','🧝','🧝‍♀️','🧝‍♂️','🧛','🧛‍♀️',
'🧛‍♂️ ','🧟','🧟‍♀️','🧟‍♂️','🧞','🧞‍♀️','🧞‍♂️','🧜','🧜‍♀️','🧜‍♂️','🧚','🧚‍♀️','🧚‍♂️','👼','🙅','🙅‍♀️','🙅‍♂️',
'🙆','🙆‍♀️','🙆‍♂️','🙋','🙋‍♀️','🙋‍♂️','🧏','🧏‍♀️','🙎‍♀️','🤦','🤦‍♀️','🤦  ‍♂️','🤷','🤷‍♀️','�‍‍♂️','🙎','🙎‍♀️','🙎‍♂️','🙍','🙍‍♀️','🙍‍♂️',
'🤳','💃','🕺','👯','👯‍♀️','👯‍♂️','🕴️','🧑‍🦽','👩‍🦽','👨‍🦽','🧑‍🦼','👩‍🦼','👨‍🦼','🚶','🚶‍♀','🚶‍♂️','🧑‍🦯',
'👩‍🦯','👨‍🦯','🧎','🧎‍♀️','🧎‍♂️','🏃','🏃‍♀️','🏃‍♂️','🧍','🧍‍♀️','🧍‍♂️','🧑‍🤝‍🧑','👫','👭','👬','💑','👩‍❤️‍👨','👩‍❤️‍👩','👨‍❤️‍👨','💏','👩‍❤️‍💋‍👨','👩‍❤️‍💋‍👩','👨‍❤️‍💋‍👨','👪','👨‍👩‍👦',
'👨‍👩‍👧','👨‍👩‍👧‍👦','👨‍👩‍👦‍👦','👨‍👩‍👧‍👧','👩‍👩‍👦','👩‍👩‍👧','👩‍👦','👩‍👧','👩‍👧‍👦','👩‍👦‍👦','👩‍👧‍👧','👨‍👦','👨‍👧','👨‍👧‍👦','👨‍👦‍👦','👨‍👧‍👧','�','🧵','🧥','🥼','�','🐶','🐱',
'🐭','🐹','🐰','🦊','🐻','🐼','🐻‍','❄️','🐨','🐯','🦁','🐮','🐷','🐽','🐸','🐵','🙈','🙉','�','🐒','🐔','🐧','�','🐤','🐣',
'🐥','🦆','🦤','🐶','🐱','🐭','🐹','🐰','🦊','🐻','🐼','🐻‍❄️','🐨','🐯','🦁','🐮','🐷','🐽','🐸','🐵','🙈','🙉','�','🐒','🐔',
'🐧','�','🐤','🐣','🐥','🦆','🦤','🕷️','🕸️','🦂','🐢','🐍','🦎','🦖','🦕','🐙','🐬','🦐','🦞','🦀','🐡','🐠','🐟','🦭','🐬','🐳',
'🐋 ','🦈','🐊','🐅','🐆','🦓','🦍','🦧','🐘','🐃','🦬','🦛','🦏','🐪','🐫','🦒','🦘','🐃','🐂','🐄','🐎','🐖','🐏','🐑','🦙',
'🐐','🦌','🐕','🐩','🦮','🐕‍🦺','☘️','🍀','🎍','🎋','🍃','🍂','🍁','🪶','🍄','🐚','🪨','🪵','🌾','🪴','💐','🌷','🌹','🥀','🌺','🌸', 
 '🌼','🌻','🌞','🌝','🌛','🌜','🌚','🌕','🌖','🌗','🌘','🌑','🌒','🌓','🌔','🌙','🌎','🌍','🌏','🪐','💫','⭐','🌟','✨','🍏','🍎',
 '🍐','🍊','🍋','🍌','🍍','🍇','🫐','🍓','🍈','🍒','🍑','🥭','🍍','🥥','🥝','🍅','🍆','🥑',  '🫒','🥦','🥬','🫑','🥛','🍼','☕','🍵','🫖',
 '🧉','🧋','🧃','🥤','🍶','🍺','🍻','🥂','🍷','🥃','🍸','⚽','🏀','🏈','⚾','🥎','🎾','🏐','🏉','🥏','🪃','🎱','🪀','🏓','🏸','🏒',
 '🏑','🥍','🏏','🥅','⛳','🪁 ','🏹','🎣','🤿','🥊','🚗','🚕','🚙','🛻','🚌','🚎','🏎️','🚓','🚑','🚒','🚐','🚚','🚛','🚜','🦯',
 '🦽','🦼','🛴','🚲','🛵' ,'🏍️','🛺','🚨','🚔',
'🚍','🚘','🚖','🚡','🚠','🚟','🚃','🚋','🚞','🚝','🚄','🚅','🚈','🚂','🚆','🚇','🚊','🚉','✈️','🛫','🛬','🛩️','💺','�',
'️️','🚀','🛸','🚁','🛶','⛵','🚤','🛥️','🛳️','⛴️','🚢','⚓','⛽','🚧','🚦','🚥','🚏','🗺️','🗿','🗽','🗼','🏰','🏯','🏟️',
'🎡','🎢','🎠','⛲','⛱️','🏖️','🏝️',
'🥋','🎽','🛹','🛼','🛷','⛸️','🥌','🎿','⛷️','🏂','🪂','🏋️','🏋️‍♀️','🏋️‍♂️','🤼','🤼‍♀️','🤼‍♂️','🤸','🤸‍♀️','🤸‍♂️','⛹️','⛹️‍♀️',
'⛹️‍♂️','🤺','🤾','🤾‍♀️','🤾‍♂️','🏌️','🏌️‍♀️','🏌️‍♂️','🏇','🧘','🧘‍♀️','🧘‍♂️',   '🏄','🏄‍♀️','🏄‍♂️','🏊','🏊‍♀️','🏊‍♂️','🤽','🤽‍♀️',
'🤽‍♂️','🚣','🚣‍♀️','🚣‍♂️','🧗','🧗‍♀️','🧗‍♂️','🚵',
'🥒','🌶️','🌽','🥕','🧄','🧅','🥔','🍠','🥐','🥯','🍞','🥖','🫓','🥨','🧀','🥚','🍳','🧈','🥞','🧇','🥓','🥩','🍗',
'🍖','🌭','🍔','🍟','🍕','🥪','🥙','🧆','🌮','🌯','🫔',
'👚','👕','👖','🩲','🩳','👔','👗','👙','🩱','👘','🥻','🥿','👠','👡','👢','👞','👟','🥾','🩴','⌚','📱','📲','💻','⌨️',
'🖥️','🖨️','🖱️','🖲️','🕹️','🗜️','💽','💾','💿','📀','📼','📷','📸','📹',    '🎥','📽️','🎞️','📞',
'☎️','📟','📠','📺','📻','🎙️','🎚️','🎛️','🧭','⏱️','⏲️','⏰','🕰️','⌛','⏳','📡','🔋','🔌','💡','�','🕯️','🪔','🧯',
'🛢️','💸','💵','💴','💶','💷','🪙','💰','💳','💎','⚖️','🪜','🧰','🪛','🔧','🔨','⚒️','🛠️','⛏️','🔩','⚙️','🧱','🪠','🪣',
'🚰','🚿','🛁','🛀','🪥','🧼','🪒','🧽','🧴','🛎️','🔑','🗝️','🚪','🪑','🪞','🛋️','🛏️','🛌','🧸','🖼️','🛍️',
'🛒','🎁','🎈','🎏','🎀','🎊','🎉','🪅','🪆','🎎','🏮','🎐','🧧','✉️','📩','📨','📧','💌','📥','📤'   ,'📦','🏷️','📪','📫',
'📬','📭','📮','📯','🪧','📜','📃','📄','📑','🧾','📊','📈','📉','🗒️','🗓️','📆','📅','🗑️','📇', '🗃️','🏳️','🏴','🏁','🚩',
'🏳️‍🌈','🏳️‍⚧️','🏴‍☠️','🇦🇫','🇦🇽','🇦🇱','🇩🇿','🇦🇸','🇦🇩','🇦🇴','🇦�','🇦🇶','🇦🇬','🇦',
'🇷','🇦🇲','🇦🇼','🇦🇺','🇦🇹','🇦🇿','🇧🇸','🇧🇭','🇧🇩','🇧🇧','🇧🇾','🇧🇪','🇧🇿','🇧🇯','🇧🇲','🇧🇹','🇧🇴','🇧�',
'🇧🇼','🇧🇷','🇮🇴','🇻🇬','🇧🇳','🇧🇬','🇧🇫','🇧🇮','🇰🇭','🇨🇲','🇨🇦','🇮🇨','🇨🇻','🇧🇶','🇰🇾','🇨🇫','🇹🇩',
'🇨🇱','🇨🇳','🇨🇽','🇨🇨','🇨🇴','🇰🇲','🇨🇬','🇨🇩','🇨🇰','🇨🇷','🇨🇮','🇭🇷','🇨🇺','🇨🇼','🇨🇾','🇨🇿','🇩🇰',
'🇩🇯','🇩🇲','🇩🇴','🇪🇨','🇪🇬','🇸🇻','🇬🇶','🇪🇷','🇪🇪','🇪🇹','🇪🇺','🇫🇰','🇫🇴','🇫🇯','🇫🇮','🇫🇷','🇬🇫','🇯🇪','🇯🇴','🇰🇿','🇰🇪','🇰🇮','🇽🇰','🇰🇼','🇰🇬','🇱🇦','🇱🇻','🇱🇧','🇱🇸','🇱🇷','🇱🇾','�','🇮','🇱🇹','🇱🇺',
'🇲🇴','🇲🇰','🇲🇬','🇲🇼','🇲🇾','🇲🇻','🇲🇱','🇲🇹','🇲🇭','🇲🇶','🇲🇷','🇲🇺','🇾🇹','🇲🇽','🇫','🇲','🇲🇩','🇲🇨','�',
'🇳','🇲🇪','🇲🇸','🇲🇦','🇲🇿','🇲🇲','🇳🇦','🇳🇷','🇳🇵','🇳🇱','🇳🇨','🇳🇿','🇳🇮','🇳🇪','🇳�','🇳🇺','🇳🇫','🇰',
'🇵','🇲🇵','🇳🇴','🇴🇲','🇵🇰','🇵🇼','🇵🇸','🇵🇦','🇵🇬','🇵🇾','🇵🇪','🇵🇭','🇵🇳','🇵🇱','🇵🇹','🇵🇷','🇶🇦','🇷�',
'🇷🇴','🇷🇺','🇷🇼','🇼🇸','🇸🇲','🇸🇹','🇸🇦','🇸🇳','🇷🇸','🇸🇨','🇸🇱','🇸🇬','🇸🇽','🇸🇰','🇸🇮','🇬🇸','🇸🇧',
'🇰🇳','🇸🇴','🇿🇦','🇱🇨','🇸🇭','🇧🇱','🇱🇰','🇪🇸','🇸🇸','🇰🇷','🇵🇲','🇻🇨','🇸🇩','🇸🇷','🇸🇿','🇸🇪','🇨🇭',
'🇸🇾','🇹🇼','🇹🇯','🇹🇿','🇹🇭','🇹🇱','🇹🇬','🇹🇰','🍦','👑','🤍','🏹','⚔️','🧡']
var pedo = []
var blacklist = ['-','_','=','+','.',',',',','/','*','%','^','#','\n','{','}','[',']','a','b','c','d','e','f','g','h','i','j','k','o','p','r','s','t','v','w','x','y','z','m','n','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','R','S','T','V','Q','W','X','Y','Z']
const antiSpam = new AntiSpam({
warnThreshold: 1000, // Amount of messages sent in a row that will cause a warning.
	kickThreshold: 7000, // Amount of messages sent in a row that will cause a kick.
	banThreshold: 7000, // Amount of messages sent in a row that will cause a ban.
	maxDublicatesMute: 3,
	maxDuplicatesWarning: 70000, // Amount of duplicate messages that trigger a warning.
	maxDuplicatesKick: 1000000, // Amount of duplicate messages that trigger a warning.
	maxDuplicatesBan: 12000000, // Amount of duplicate messages that trigger a warning.
	exemptPermissions: [ 'ADMINISTRATOR'], // Bypass users with any of these permissions.
	ignoreBots: true, // Ignore bot messages.
	muteRoleName: 'Muted', // Name of the role that will be given to muted users!
	muteErrorMessage: "I could not mute {user_tag} because of the permissions OR the 'Muted' role doesn't exist. I can automatically create the role for you. Vsetup Muted [Role position]",
	removeMessages: false
})
	function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
var lasagna = getRandomInt(6);
let db = JSON.parse(fs.readFileSync("./database.json", "utf8"));
let serv = JSON.parse(fs.readFileSync("./negro.json", "utf8"));

client.on('message', async message => {
	 try {
	antiSpam.message(message);
	const nigga = message.mentions.members.first()
	  if (!db[message.author.id]) db[message.author.id] = {
        xp: 0,
        level: 1,
		rank: "Low"
      };
	  if (!serv[message.guild.id]) serv[message.guild.id] = {
        protect: false,
        protectadv: false,
		allprot: false,
		welcome: false,
		welcSet: null,
		logSet: null,
		logs: false,
		lvlupmsg: true,
		rr: null,
		rrSet: null
      };
	  if (message.author.id != client.user.id) {
	  db[message.author.id].xp = db[message.author.id].xp + lasagna;
	  }
    let userInfo = db[message.author.id];
	let servInfo = serv[message.guild.id];
	if (message.author.id == client.user.id && message.channel.id != servInfo.welSet && message.channel.id != servInfo.logSet && !message.channel.name.includes('mem')) {
		message.delete({timeout: 100000})
	}
	 	if(message.author.id != client.user.id) {
		if(message.content.includes('Reaction Roles')) {
			if (message.member.hasPermission('ADMINISTRATOR')) {
			var stop2 = true
			var three = 0
			var text = message.content.split('')
			console.log(message.content)
			console.log(text)
			var text2 = ''
			while(three < text.length) {
				var text3 = text[three]
				if (!blacklist.includes(text3)) {
text2 = text2 + text[three]
three++
			} else {
		text2 = text2 + ' ' + text[three] + ' '
three++
			}		
			}
var ct0 = text2
var ct = ct0
console.log(ct)
	if (ct.length != 0) {
		var ct2 = ct.split(' ')
var ct4 = ct2.filter(x => x.includes('@') || list.includes(x) )
servInfo.rrSet = ct4
nig = ct4.join()
console.log(ct4)
	}
	servInfo.rr = message.id
	} else {
		message.channel.send('You do not have permissions to do that')
	}
	}
	}
	if (message.content == 'Vmsglogs on' && message.member.hasPermission('ADMINISTRATOR')&& message.author.id != client.user.id) {
		servInfo.logs = true
		message.channel.send('Logs have been set on')
	}
	if (message.content == 'Vinvite') {
		message.author.send('https://discord.com/api/oauth2/authorize?client_id=826896186089668618&permissions=8&scope=bot')
	}
	if (message.content == 'Vofficial') {
		message.author.send('https://discord.gg/yutymr68Qe')
	}
	if (message.content == 'Vmsglogs off' && message.member.hasPermission('ADMINISTRATOR')&& message.author.id != client.user.id) {
		servInfo.logs = false
		message.channel.send('Logs have been set off')
	}
	if (message.content.includes('Vset msglogs-channel') && message.member.hasPermission('ADMINISTRATOR') && message.author.id != client.user.id) {
			var command = message.content.slice(21)
servInfo.logSet = command
message.channel.send('Current message logs channel: ' + servInfo.logSet)
if (command.includes('v')||command.includes('g')||command.includes('m')||command.includes('n')||command.includes('')||command.includes('p')||command.includes('o')||command.includes('e')||command.includes('y')||command.includes('y')) {
	message.channel.send('You have to put an ID of the channel to make this feature work(At the moment)')
}
	}
	if ((message.content.includes('Vsetup Muted') || message.content.includes('Vsetup muted'))&& message.author.id != client.user.id && message.member.hasPermission('ADMINISTRATOR')) {
		    let role = message.guild.roles.cache.find(role => role.name == "Muted");
    if (typeof role == 'undefined') {
		message.channel.send("If the Muted role appears in the bottom, manually change its position")
		const command = message.content.slice(13)
			try {
         message.guild.roles.create({
			   data: {
			 position: command,
             name: "Muted",
             color: "#000000",
             permissions:['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY']
			   }
		   })
		   } catch {
		console.log('fuck')
		   }
		} else {
			message.channel.send('The role already exists')
		}
	}
if (message.content.includes('If the Muted role') && message.author.id == client.user.id) {
	  var rolee = message.guild.roles.cache.find(role => role.name == 'Muted')
	   message.guild.channels.cache.forEach(channel => channel.createOverwrite(rolee, {
				   SEND_MESSAGES: false
			   }
			   ))
}
	if (servInfo.logs == true && typeof servInfo.logSet != 'undefined') {
	const channel = client.channels.cache.find(channel => channel.id == servInfo.logSet)
	if (typeof channel != 'undefined') {
		if (message.author.id !== client.user.id) {
	channel.send('[:exclamation:] ' + message.channel.name + ' ' + message.author.tag + ':' + message.content)
	}
	}
	}
	if(userInfo.level <= 3) {
		userInfo.rank = "Low";
	};
    if(userInfo.xp > 100 && userInfo.level == 1){
        userInfo.level = userInfo.level + 1
        userInfo.xp = 0
		if (servInfo.lvlupmsg == true) {
        message.channel.send("Congratulations on leveling up," + "<@" + message.author.id + ">" + " !" + " Your level is now " + userInfo.level)
    }
	}
	if(userInfo.xp > 200 && userInfo.level == 2){
        userInfo.level++
        userInfo.xp = 0
		if (servInfo.lvlupmsg == true) {
        message.channel.send("Congratulations on leveling up," + "<@" + message.author.id + ">" + " !" + " Your level is now " + userInfo.level)
    }
	}
	if(userInfo.xp > 400 && userInfo.level == 3){
        userInfo.level++
        userInfo.xp = 0
		if (servInfo.lvlupmsg == true) {
        message.channel.send("Congratulations on leveling up," + "<@" + message.author.id + ">" + " !" + " Your level is now " + userInfo.level)
    }
	}
	if(userInfo.xp > 600 && userInfo.level == 4){
        userInfo.level++
        userInfo.xp = 0
		if (servInfo.lvlupmsg == true) {
        message.channel.send("Congratulations on leveling up," + "<@" + message.author.id + ">" + " !" + " Your level is now " + userInfo.level)
    }
	};
	if(userInfo.xp > 800 && userInfo.level == 5){
        userInfo.level++
        userInfo.xp = 0
		if (servInfo.lvlupmsg == true) {
        message.channel.send("Congratulations on leveling up," + "<@" + message.author.id + ">" + " !" + " Your level is now " + userInfo.level)
    }
	}
    if(message.content == "Vlevel") {
        let userInfo = db[message.author.id];
        let embed = new Discord.MessageEmbed()
        .setColor(0x4286f4)
		.addField("-----Level Info-----", "Your stats:")
		.addField("User:", message.author.tag)
        .addField("Level", userInfo.level)
		if (userInfo.level == 1) {
        embed.addField("XP", userInfo.xp + level0);
		};
		if (userInfo.level == 2) {
        embed.addField("XP", userInfo.xp + level1);
		};
		if (userInfo.level == 3) {
        embed.addField("XP", userInfo.xp + level2);
		};
		if (userInfo.level == 4) {
        embed.addField("XP", userInfo.xp + level3);
		};
		if (userInfo.level == 5) {
        embed.addField("XP", userInfo.xp + level4);
		};
        embed.addField("Chat activity:", userInfo.rank);
        message.channel.send(embed)
    }
	try {
	if (message.content.includes("Vlevel info")) {
        let userInfo = db[nigga.id];
        let embed2 = new Discord.MessageEmbed()
        embed2.setColor(0x4286f4)
		embed2.addField("-----Level Info-----"," Stats:")
		.addField("User:", nigga)
        .addField("Level", userInfo.level)
		if (userInfo.level == 1) {
        embed2.addField("XP", userInfo.xp + level0);
		};
		if (userInfo.level == 2) {
        embed2.addField("XP", userInfo.xp + level1);
		};
		if (userInfo.level == 3) {
        embed2.addField("XP", userInfo.xp + level2);
		};
		if (userInfo.level == 4) {
        embed2.addField("XP", userInfo.xp + level3);
		};
		if (userInfo.level == 5) {
        embed2.addField("XP", userInfo.xp + level4);
		};
        embed2.addField("Chat activity:", userInfo.rank);
        message.channel.send(embed2)
	}
    } catch {
		message.channel.send('The user is not on the list!')
	}
    fs.writeFile("./database.json", JSON.stringify(db), (x) => {
        if (x) console.error(x)
	});
	if (servInfo.allprot && message.content.includes('shit')) {
	message.delete()
	message.channel.send('Watch your language ' + "<@" + message.author.id + ">")
}
if (servInfo.allprot && message.content.includes('SHIT')) {
	message.delete()
	message.channel.send('Watch your language ' + "<@" + message.author.id + ">")
}
if (servInfo.allprot && message.content.includes('damn')) {
	message.delete()
	message.channel.send('Watch your language ' + "<@" + message.author.id + ">")
}
if (servInfo.allprot && message.content.includes('Damn')) {
	message.delete()
	message.channel.send('Watch your language ' + "<@" + message.author.id + ">")
}
if (servInfo.allprot && message.content.includes('Shit')) {
	message.delete()
	message.channel.send('Watch your language ' + "<@" + message.author.id + ">")
}
if (servInfo.allprot && message.content.includes('DAMN')) {
	message.delete()
	message.channel.send('Watch your language ' + "<@" + message.author.id + ">")
}
if (servInfo.allprot && message.content.includes('SHUT')) {
	message.delete()
	message.channel.send('Watch your language ' + "<@" + message.author.id + ">")
}
if (servInfo.allprot && message.content.includes('shut')) {
	message.delete()
	message.channel.send('Watch your language ' + "<@" + message.author.id + ">")
}
if (servInfo.protect && message.content.includes('raid')) {
	message.delete()
	message.channel.send('Watch your language ' + "<@" + message.author.id + ">")
}
if (servInfo.protect && message.content.includes('nuk')) {
	message.delete()
	message.channel.send('Watch your language ' + "<@" + message.author.id + ">")
}
if (servInfo.protect && message.content.includes('RAID')) {
	message.delete()
	message.channel.send('Watch your language ' + "<@" + message.author.id + ">")
}
if (servInfo.protect && message.content.includes('NUK')) {
	message.delete()
	message.channel.send('Watch your language ' + "<@" + message.author.id + ">")
}
if (servInfo.protectadv && message.content.includes('fuck')) {
	message.delete()
	message.channel.send('Watch your language ' + "<@" + message.author.id + ">")
}
if (servInfo.protectadv && message.content.includes('FUCK')) {
	message.delete()
	message.channel.send('Watch your language ' + "<@" + message.author.id + ">")
}
if (servInfo.protectadv && message.content.includes('Faggot')) {
	message.delete()
	message.channel.send('Watch your language ' + "<@" + message.author.id + ">")
}
if (servInfo.protectadv && message.content.includes('Bitch')) {
	message.delete()
	message.channel.send('Watch your language ' + "<@" + message.author.id + ">")
}
if (servInfo.protectadv && message.content.includes('faggot')) {
	message.delete()
	message.channel.send('Watch your language ' + "<@" + message.author.id + ">")
}
if (servInfo.protectadv && message.content.includes('bitch')) {
	message.delete()
	message.channel.send('Watch your language ' + "<@" + message.author.id + ">")
}
if (servInfo.protectadv && message.content.includes('BITCH')) {
	message.delete()
	message.channel.send('Watch your language ' + "<@" + message.author.id + ">")
}
if (servInfo.protectadv && message.content.includes('NIGGER')) {
	message.delete()
	message.channel.send('Watch your language ' + '<@' + message.author.id + '>')
}
if (servInfo.protectadv && message.content.includes('Nigger')) {
	message.delete()
	message.channel.send('Watch your language ' + '<@' + message.author.id + '>')
}
if (servInfo.protectadv && message.content.includes('nigger')) {
	message.delete()
	message.channel.send('Watch your language ' + '<@' + message.author.id + '>')
}
if (servInfo.protectadv && message.content.includes('dick')) {
	message.delete()
	message.channel.send('Watch your language ' + '<@' + message.author.id + '>')
}
if (servInfo.protectadv && message.content.includes('cock')) {
	message.delete()
	message.channel.send('Watch your language ' + '<@' + message.author.id + '>')
}
if (servInfo.protectadv && message.content.includes('nigga')) {
	message.delete()
	message.channel.send('Watch your language ' + '<@' + message.author.id + '>')
}
if (servInfo.protectadv && message.content.includes('Nigga')) {
	message.delete()
	message.channel.send('Watch your language ' + '<@' + message.author.id + '>')
}
if (servInfo.protectadv && message.content.includes('ass')) {
	message.delete()
	message.channel.send('Watch your language ' + '<@' + message.author.id + '>')
}
if (servInfo.protectadv && message.content.includes('Ass')) {
	message.delete()
	message.channel.send('Watch your language ' + '<@' + message.author.id + '>')
}
if (servInfo.protectadv && message.content.includes('ASS')) {
	message.delete()
	message.channel.send('Watch your language ' + '<@' + message.author.id + '>')
}
if (servInfo.protectadv && message.content.includes('NIGGA')) {
	message.delete()
	message.channel.send('Watch your language ' + '<@' + message.author.id + '>')
}
if (servInfo.protectadv && message.content.includes('PUSSY')) {
	message.delete()
	message.channel.send('Watch your language ' + '<@' + message.author.id + '>')
}
if (servInfo.protectadv && message.content.includes('pussy')) {
	message.delete()
	message.channel.send('Watch your language ' + '<@' + message.author.id + '>')
}
if (servInfo.protectadv && message.content.includes('Pussy')) {
	message.delete()
	message.channel.send('Watch your language ' + '<@' + message.author.id + '>')
}
if (servInfo.protectadv && message.content.includes('Fuck')) {
	message.delete()
	message.channel.send('Watch your language ' + '<@' + message.author.id + '>')
}
if (servInfo.protectadv && message.content.includes('Bitch')) {
	message.delete()
	message.channel.send('Watch your language ' + '<@' + message.author.id + '>')
}
if (message.content == 'Vmeme' || message.content == 'Vмем') {
	if (message.channel.name.includes('mem')) {
		const url = 'https://www.reddit.com/r/meme/hot/.json?limit=100'

        https.get(url, (result) => {
            var body = ''
            result.on('data', (chunk) => {
                body += chunk
            })

            result.on('end', () => {
                var response = JSON.parse(body)
                var index = response.data.children[Math.floor(Math.random() * 99) + 1].data

                if (index.post_hint !== 'image') {

                    var text = index.selftext
                    const textembed = new Discord.MessageEmbed()
                        .setTitle(subRedditName)
                        .setColor(9384170)
                        .setDescription(`[${title}](${link})\n\n${text}`)
                        .setURL(`https://reddit.com/${subRedditName}`)

                    message.channel.send(textembed)
                }

                var image = index.preview.images[0].source.url.replace('&amp;', '&')
                var title = index.title
                var link = 'https://reddit.com' + index.permalink
                var subRedditName = index.subreddit_name_prefixed

                if (index.post_hint !== 'image') {
                    const textembed = new Discord.RichEmbed()
                        .setTitle(subRedditName)
                        .setColor(9384170)
                        .setDescription(`[${title}](${link})\n\n${text}`)
                        .setURL(`https://reddit.com/${subRedditName}`)

                    message.channel.send(textembed)
                }
                console.log(image);
                const imageembed = new Discord.MessageEmbed()
                    .setTitle(subRedditName)
                    .setImage(image)
                    .setColor(9384170)
                    .setDescription(`[${title}](${link})`)
                    .setURL(`https://reddit.com/${subRedditName}`)
                message.channel.send(imageembed)
            }).on('error', function (e) {
                console.log('Got an error: ', e)
            })
        })
} else {
	message.channel.send('Memes are only available in the memes channel')
}
}
 if (message.content.includes('Vunmute')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
	  if (member && message.member.hasPermission('ADMINISTRATOR')) {
        member
          .roles.remove(message.guild.roles.cache.find(role => role.name =='Muted'))
          .then(() => {
            message.reply(`Succesfully unmuted the user`);
          })
          .catch(err => {
            message.reply('I was unable to unmute');
            console.error(err);
          });
      } else {
        message.reply("***Missing permissons***");
	  }
    }
 }
  if (message.content.startsWith('Vmute')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member && message.member.hasPermission('ADMINISTRATOR')) {
        member
          .roles.add(message.guild.roles.cache.find(role => role.name == 'Muted'))
          .then(() => {
            message.reply(`Done.`);
          })
          .catch(err => {
            message.reply('I was unable to mute the user');
            console.error(err);
          });
      } else {
        message.reply("***Missing permissons***");
      }
    }
  };
if (message.content == 'Vmeme history' || message.content == 'Vмем история') {
	if (message.channel.name.includes('mem')) {
	
		const url = 'https://www.reddit.com/r/HistoryMemes/.json?limit=100'

        https.get(url, (result) => {
            var body = ''
            result.on('data', (chunk) => {
                body += chunk
            })

            result.on('end', () => {
                var response = JSON.parse(body)
                var index = response.data.children[Math.floor(Math.random() * 99) + 1].data

                if (index.post_hint !== 'image') {

                    var text = index.selftext
                    const textembed = new Discord.MessageEmbed()
                        .setTitle(subRedditName)
                        .setColor(9384170)
                        .setDescription(`[${title}](${link})\n\n${text}`)
                        .setURL(`https://reddit.com/${subRedditName}`)

                    message.channel.send(textembed)
                }

                var image = index.preview.images[0].source.url.replace('&amp;', '&')
                var title = index.title
                var link = 'https://reddit.com' + index.permalink
                var subRedditName = index.subreddit_name_prefixed

                if (index.post_hint !== 'image') {
                    const textembed = new Discord.RichEmbed()
                        .setTitle(subRedditName)
                        .setColor(9384170)
                        .setDescription(`[${title}](${link})\n\n${text}`)
                        .setURL(`https://reddit.com/${subRedditName}`)

                    message.channel.send(textembed)
                }
                console.log(image);
                const imageembed = new Discord.MessageEmbed()
                    .setTitle(subRedditName)
                    .setImage(image)
                    .setColor(9384170)
                    .setDescription(`[${title}](${link})`)
                    .setURL(`https://reddit.com/${subRedditName}`)
                message.channel.send(imageembed)
            }).on('error', function (e) {
                console.log('Got an error: ', e)
            })
        })
} else {
	message.channel.send('Memes are only available in the memes channel')
}
}
if (message.content == 'Vprotection on' && message.member.hasPermission('ADMINISTRATOR')) {
	servInfo.protect = true
	message.channel.send('Protection is now ON')
}
if (message.content == 'Vprotection off' && message.member.hasPermission('ADMINISTRATOR')) {
	servInfo.protect = false
	message.channel.send('Protection is now OFF')
}
if (message.content == 'Vprotection+ on' && message.member.hasPermission('ADMINISTRATOR')) {
	servInfo.protectadv = true
	message.channel.send('Advanced protection is now ON')
}
if (message.content == 'Vprotection+ off' && message.member.hasPermission('ADMINISTRATOR')) {
	servInfo.protectadv = false
	message.channel.send('Advanced protection is now OFF')
}
if (message.content == 'Vprotection++ on' && message.member.hasPermission('ADMINISTRATOR')) {
	servInfo.allprot = true
	message.channel.send('Super protection is now ON')
}
if (message.content == 'Vprotection++ off' && message.member.hasPermission('ADMINISTRATOR')) {
	servInfo.allprot = false
	message.channel.send('Super protection is now OFF')
}
if (message.content == 'Vserver security' && message.member.hasPermission('ADMINISTRATOR')) {
	var noob = message.guild.channels.cache.find(channel =>  channel.name.includes('mem'))
	var pig = message.guild.roles.cache.find(role =>  role.name == 'Muted')
	const embed = new Discord.MessageEmbed()
	embed.setColor('RANDOM')
	embed.addField('SERVER SECURITY STATUS', 'Statistics:')
	if (servInfo.protect) {
	embed.addField('Basic protection ', ':white_check_mark:')
	} else {
		embed.addField('Basic protection ', ':x:')
	}
	if (servInfo.protectadv) {
	embed.addField('Advanced protection ', ':white_check_mark:')
	} else {
		embed.addField('Advanced protection ', ':x:')
	}
	if (servInfo.allprot) {
	embed.addField('Super protection ', ':white_check_mark:')
	} else {
		embed.addField('Super protection ', ':x:')
	}
	if (servInfo.logSet) {
	embed.addField('Special logs channel ', ':white_check_mark:')
	} else {
		embed.addField('Special logs channel ', ':x:')
	}
	if (servInfo.logs) {
	embed.addField('Message logs ', ':white_check_mark:')
	} else {
		embed.addField('Message logs ', ':x:')
	}
	if (typeof pig != 'undefined') {
	embed.addField('Muted role ', ':white_check_mark:')
	} else {
		embed.addField('Muted role ', ':x:')
	}
	message.channel.send(embed)
}
if (message.content == 'Vserver settings' && message.member.hasPermission('ADMINISTRATOR')) {
	var noob = message.guild.channels.cache.find(channel =>  channel.name.includes('mem'))
	const embed = new Discord.MessageEmbed()
	embed.setColor('RANDOM')
	embed.addField('SERVER SETTINGS', 'Statistics:')
	if (servInfo.welcome) {
	embed.addField('Welcome messages ', ':white_check_mark:')
	} else {
		embed.addField('Welcome messages ', ':x:')
	}
	if (typeof noob != 'undefined') {
		embed.addField('Special meme channel', ':white_check_mark:')
} else {
	embed.addField('Special meme channel', ':x:')
}
	if (typeof servInfo.welcSet != 'undefined') {
		embed.addField('Special welcome channel', ':white_check_mark:')
} else {
	embed.addField('Special welcome channel', ':x:')
}
	message.channel.send(embed)
}
if (message.content == 'Vhelp') {
const canvas = Canvas.createCanvas(1000, 700);
	const ctx = canvas.getContext('2d');

	// Since the image takes time to load, you should await it
	const background = await Canvas.loadImage('./coolwelcome.png');
	// This uses the canvas dimensions to stretch the image onto the entire canvas
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	// Add an exclamation point here and below
	
	// Use helpful Attachment class structure to process the file for you
	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'help.png');

	message.channel.send(attachment);
}
if (message.content == 'Vchangelog') {
	const embed3 = new Discord.MessageEmbed()
	embed3.setColor('RANDOM')
	embed3.addField('Latest updates:', '-Bug fixes; -feedback command')
	embed3.addField('Coming Soon:', 'Colors! Choose from more than 300 available colors to customize your nickname')
	message.channel.send(embed3)
}
if (message.content.includes('Vcomment') && message.author.id != client.user.id) {
	var channel = client.channels.cache.get('830784846506491904')
	var command = message.content.slice(9)
	channel.send(message.author.tag + ' ' + command)
}
if (message.content.includes('Vset welcome-channel') && message.member.hasPermission('ADMINISTRATOR') && message.author.id != client.user.id) {
	var command = message.content.slice(21)
servInfo.welcSet = command
if (command.includes('v')||command.includes('g')||command.includes('m')||command.includes('n')||command.includes('')||command.includes('p')||command.includes('o')||command.includes('e')||command.includes('y')||command.includes('y')) {
	message.channel.send('You have to put an ID of the channel to make this feature work(At the moment)')
	}
message.channel.send('Current welcome channel: ' + servInfo.welcSet)
	}
if (message.content.includes('Vwelcome messages on') && message.member.hasPermission('ADMINISTRATOR')) {
servInfo.welcome = true
message.channel.send('Welcome messages have been turned on')
}
if (message.content.includes('Vwelcome messages off') && message.member.hasPermission('ADMINISTRATOR')) {
servInfo.welcome = false
message.channel.send('Welcome messages have been turned off')
}

 fs.writeFile("./negro.json", JSON.stringify(serv), (x) => {
        if (x) console.error(x)
	});
	 } catch {
		 console.log('fuck')
	 }
});
client.on('guildMemberAdd', async member => {
	try {
	let servInfo = serv[member.guild.id]
	if (member) {
	if (typeof servInfo.welcSet != 'undefined') {
	const channel = client.channels.cache.find(channel => channel.id == servInfo.welcSet)
		if (servInfo.welcome && typeof servInfo.welcSet != null) {
	const canvas = Canvas.createCanvas(700, 700);
	const ctx = canvas.getContext('2d');

	// Since the image takes time to load, you should await it
	const background = await Canvas.loadImage('./welcome.png');
	// This uses the canvas dimensions to stretch the image onto the entire canvas
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	// Draw a shape onto the main canvas
	ctx.drawImage(avatar, 200, 125, 300, 307)
	ctx.font = '40px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText("Welcome to the server, ", canvas.width / 17, canvas.height / 1.2);
	ctx.fillText(member.user.tag, canvas.width / 17, canvas.height / 1.1);

	// Add an exclamation point here and below
	
	// Use helpful Attachment class structure to process the file for you
	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(attachment);
		}
	}
	}
	} catch { 
	console.log('fuck')
	}
});
		client.on('messageReactionAdd', (reaction,user) =>  {
			let guild = reaction.guild
			let member = reaction.member
			var one = 0
var two = 1
var stop = true
var result = []
	let message = reaction.message
	let emoji = reaction.emoji
	let servInfo = serv[message.guild.id]
	if (servInfo.rr == message.id) {
		console.log('111')
	if (list.includes(servInfo.rrSet[two])) {
		console.log('222')
		console.log('333')
		while (stop && two <= servInfo.rrSet.length) {
	if(emoji.name == servInfo.rrSet[two] && message.id == servInfo.rr) {
		const member = message.guild.members.cache.get(user.id)
		if (servInfo.rrSet[one].length == 23) {
		var portal = servInfo.rrSet[one].slice(4, -1)
		console.log(portal)
		} else {
			var portal = servInfo.rrSet[one].slice(3,-1)
			console.log(portal)
			console.log('processing')
		}
		var he = message.guild.roles.cache.find(role => role.id == portal)
		member.roles.add(he)
		stop = false
	} else {
		two = two + 2
		one = one + 2
	}
	}
	} else if (list.includes(servInfo.rrSet[one])) {
		while (stop && two <= servInfo.rrSet.length) {
	if(emoji.name == servInfo.rrSet[one] && message.id == servInfo.rr) {
		const member = message.guild.members.cache.get(user.id)
		if (servInfo.rrSet[two].length == 23) {
		var portal = servInfo.rrSet[two].slice(4, -1)
		} else {
			var portal = servInfo.rrSet[two].slice(3,-1)
		}
		var he = message.guild.roles.cache.find(role => role.id == portal)
		member.roles.add(he)
		stop = false
	} else {
		two = two + 2
		one = one + 2
	}
		}
	} else {
		console.log('what an idiot')
		two = two + 2
		one = one + 2
	}
	}
})
		client.on('messageReactionRemove', (reaction,user) =>  {
			let guild = reaction.guild
			let member = reaction.member
			var one = 0
var two = 1
var stop = true
var result = []
	let message = reaction.message
	let emoji = reaction.emoji
	let servInfo = serv[message.guild.id]
	if (servInfo.rr == message.id) {
		console.log('111')
	if (list.includes(servInfo.rrSet[two])) {
		console.log('222')
		console.log('333')
		while (stop && two <= servInfo.rrSet.length) {
	if(emoji.name == servInfo.rrSet[two] && message.id == servInfo.rr) {
		const member = message.guild.members.cache.get(user.id)
		if (servInfo.rrSet[one].length == 23) {
		var portal = servInfo.rrSet[one].slice(4, -1)
		} else {
			var portal = servInfo.rrSet[one].slice(3,-1)
			console.log('processing')
		}
		var he = message.guild.roles.cache.find(role => role.id == portal)
		member.roles.remove(he)
		stop = false
	} else {
		two = two + 2
		one = one + 2
	}
		}
	} else if (list.includes(servInfo.rrSet[one])) {
		while (stop && two <= servInfo.rrSet.length) {
	if(emoji.name == servInfo.rrSet[one] && message.id == servInfo.rr) {
		const member = message.guild.members.cache.get(user.id)
		if (servInfo.rrSet[two].length == 23) {
		var portal = servInfo.rrSet[two].slice(4, -1)
		} else {
			var portal = servInfo.rrSet[two].slice(3,-1)
		}
		var he = message.guild.roles.cache.find(role => role.id == portal)
		member.roles.remove(he)
		stop = false

	} else {
		two = two + 2
		one = one + 2
	}
		}
	} else {
		console.log('what an idiot')
	}
	}
})
client.login("ODI2ODk2MTg2MDg5NjY4NjE4.YGTJFQ.yNAbF_WamRIJe13pceqrhkX33pw");