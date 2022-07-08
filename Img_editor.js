//CREATED BY NSproYT

const {Module} = require('../main')

const {MODE} = require('../config')

let { upload, skbuffer } = require('raganork-bot')

var x = MODE == 'public'?false:true

var list = '```' + `╔════════════════

║𝑷𝑯𝑶𝑻𝑶 𝑬𝑫𝑰𝑻𝑶𝑹 𝑳𝑰𝑺𝑻

╚═══════════════ʏᴏᴜ ᴄᴀɴ ᴜsᴇ ɪᴛ ʙʏ ʀᴇᴘʟᴀʏ ᴛᴏ ᴀɴʏ  ɪᴍᴀɢᴇ

╔════════════════

║

║𝗔𝗩𝗔𝗜𝗟𝗔𝗕𝗟𝗘 𝗢𝗣𝗧𝗜𝗢𝗡𝗦

╔════════════════

║ 𝟷) 𝙱𝙻𝚄𝚁

║ 𝟸) 𝙿𝙸𝚇𝙴𝙻𝙰𝚃𝙴

║ 𝟹) 𝚁𝙰𝙸𝙽𝙱𝙾𝚆

║ 𝟺) 𝙷𝙾𝚁𝙽𝚈

║ 𝟻) 𝙱𝚆

║ 𝟼) 𝚁𝙴𝙳

║ 𝟽) 𝙶𝚁𝙴𝙴𝙽

║ 𝟾) 𝙱𝙻𝚄𝙴

║ 𝟿) 𝙶𝙰𝚈

║ 𝟷𝟶) 𝙶𝙻𝙰𝚂𝚂

║ 𝟷𝟷) 𝚆𝙰𝚂𝚃𝙴𝙳

║ 𝟷𝟸) 𝙿𝙰𝚂𝚂𝙴𝙳

║ 𝟷𝟹) 𝙹𝙰𝙸𝙻

║ 𝟷𝟺) 𝙲𝙾𝙼𝚁𝙰𝙳𝙴

║ 𝟷𝟻) 𝙸𝙽𝚅𝙴𝚁𝚃

║ 𝟷𝟼) 𝟸𝙸𝙽𝚅𝙴𝚁𝚃

║ 𝟷𝟽) 𝙶𝙾𝙻𝙳𝙴𝙽

║ 𝟷𝟾) 𝚂𝙸𝙼𝙿𝙲𝙰𝚁𝙳

║ 𝟷𝟿) 𝚃𝙷𝚁𝙴𝚂𝙷𝙾𝙻𝙳

╚════════════════ ` + '```'

Module({pattern: "editor",fromMe: x,desc: "photo editor"}, async(message, match) => {

await message.sendReply(list);

});

/*Module(

	{		pattern: 'blur ?(.*)',

		fromMe: x,

    dontAddCommandList: true,

		desc: 'blur the photo',

		type: 'misc',

	},async (message, match) => {

if (!message.reply_message) return await message.sendReply("*Need image*");

var imageUrl = await message.reply_message.download();

   let { link } = await upload(imageUrl)

    return await message.sendMessage(await skbuffer (`https://some-random-api.ml/canvas/blur?avatar=${link}`), 'image')});

*/

Module(

	{

		pattern: 'rainbow ?(.*)',

		fromMe: x,

    dontAddCommandList: true,

		desc: 'round rainbow border photo maker',

		type: 'misc',

	},async (message, match) => {

if (!message.reply_message) return await message.sendReply("*Need image*");

var imageUrl = await message.reply_message.download();

   let { link } = await upload(imageUrl)

    return await message.sendMessage(await skbuffer (`https://some-random-api.ml/canvas/lgbt?avatar=${link}`), 'image')});

Module(

	{

		pattern: 'pixelate ?(.*)',

		fromMe: x,

    dontAddCommandList: true,

		desc: 'pixelate the photo ',

		type: 'misc',

	},async (message, match) => {

if (!message.reply_message) return await message.sendReply("*Need image*");

var imageUrl = await message.reply_message.download();

   let { link } = await upload(imageUrl)

    return await message.sendMessage(await skbuffer (`https://some-random-api.ml/canvas/pixelate?avatar=${link}`), 'image')});

Module(

	{

		pattern: 'horny ?(.*)',

		fromMe: x,

    dontAddCommandList: true,

		desc: 'horny card maker',

		type: 'misc',

	},async (message, match) => {

if (!message.reply_message) return await message.sendReply("*Need image*");

var imageUrl = await message.reply_message.download();

   let { link } = await upload(imageUrl)

    return await message.sendMessage(await skbuffer (`https://some-random-api.ml/canvas/horny?avatar=${link}`), 'image')});

Module(

	{

		pattern: 'bw ?(.*)',

		fromMe: x,

    dontAddCommandList: true,

		desc: 'makes the photo black and white',

		type: 'misc',

	},async (message, match) => {

if (!message.reply_message) return await message.sendReply("*Need image*");

var imageUrl = await message.reply_message.download();

   let { link } = await upload(imageUrl)

    return await message.sendMessage(await skbuffer (`https://some-random-api.ml/canvas/greyscale?avatar=${link}`), 'image')});

Module(

	{

		pattern: 'red ?(.*)',

		fromMe: x,

    dontAddCommandList: true,

		desc: 'add a red filter',

		type: 'misc',

	},async (message, match) => {

if (!message.reply_message) return await message.sendReply("*Need image*");

var imageUrl = await message.reply_message.download();

   let { link } = await upload(imageUrl)

    return await message.sendMessage(await skbuffer (`https://some-random-api.ml/canvas/red?avatar=${link}`), 'image')});

Module(

	{

		pattern: 'green ?(.*)',

		fromMe: x,

    dontAddCommandList: true,

		desc: 'add a green filter',

		type: 'misc',

	},async (message, match) => {

if (!message.reply_message) return await message.sendReply("*Need image*");

var imageUrl = await message.reply_message.download();

   let { link } = await upload(imageUrl)

    return await message.sendMessage(await skbuffer (`https://some-random-api.ml/canvas/green?avatar=${link}`), 'image')}); 

Module(

	{

		pattern: 'blue ?(.*)',

		fromMe: x,

    dontAddCommandList: true,

		desc: 'add a blue filter',

		type: 'misc',

	},async (message, match) => {

if (!message.reply_message) return await message.sendReply("*Need image*");

var imageUrl = await message.reply_message.download();

   let { link } = await upload(imageUrl)

    return await message.sendMessage(await skbuffer (`https://some-random-api.ml/canvas/blue?avatar=${link}`), 'image')}); 

Module(

	{

		pattern: 'gay ?(.*)',

		fromMe: x,

    dontAddCommandList: true,

		desc: 'add gay effect',

		type: 'misc',

	},async (message, match) => {

if (!message.reply_message) return await message.sendReply("*Need image*");

var imageUrl = await message.reply_message.download();

   let { link } = await upload(imageUrl)

    return await message.sendMessage(await skbuffer (`https://some-random-api.ml/canvas/gay?avatar=${link}`), 'image')}); 

Module(

	{

		pattern: 'glass ?(.*)',

		fromMe: x,

    dontAddCommandList: true,

		desc: 'add glass effect',

		type: 'misc',

	},async (message, match) => {

if (!message.reply_message) return await message.sendReply("*Need image*");

var imageUrl = await message.reply_message.download();

   let { link } = await upload(imageUrl)

    return await message.sendMessage(await skbuffer (`https://some-random-api.ml/canvas/glass?avatar=${link}`), 'image')}); 

Module(

	{

		pattern: 'wasted ?(.*)',

		fromMe: x,

    dontAddCommandList: true,

		desc: 'wasted photo effect',

		type: 'misc',

	},async (message, match) => {

if (!message.reply_message) return await message.sendReply("*Need image*");

var imageUrl = await message.reply_message.download();

   let { link } = await upload(imageUrl)

    return await message.sendMessage(await skbuffer (`https://some-random-api.ml/canvas/wasted?avatar=${link}`), 'image')});

Module(

	{

		pattern: 'passed ?(.*)',

		fromMe: x,

    dontAddCommandList: true,

		desc: 'mission passed photo effect',

		type: 'misc',

	},async (message, match) => {

if (!message.reply_message) return await message.sendReply("*Need image*");

var imageUrl = await message.reply_message.download();

   let { link } = await upload(imageUrl)

    return await message.sendMessage(await skbuffer (`https://some-random-api.ml/canvas/passed?avatar=${link}`), 'image')}); 

Module(

	{

		pattern: 'jail ?(.*)',

		fromMe: x,

    dontAddCommandList: true,

		desc: 'add jail effect',

		type: 'misc',

	},async (message, match) => {

if (!message.reply_message) return await message.sendReply("*Need image*");

var imageUrl = await message.reply_message.download();

   let { link } = await upload(imageUrl)

    return await message.sendMessage(await skbuffer (`https://some-random-api.ml/canvas/jail?avatar=${link}`), 'image')});

Module(

	{

		pattern: 'comrade ?(.*)',

		fromMe: x,

    dontAddCommandList: true,

		desc: 'add photo effect',

		type: 'misc',

	},async (message, match) => {

if (!message.reply_message) return await message.sendReply("*Need image*");

var imageUrl = await message.reply_message.download();

   let { link } = await upload(imageUrl)

    return await message.sendMessage(await skbuffer (`https://some-random-api.ml/canvas/comrade?avatar=${link}`), 'image')});

Module(

	{

		pattern: 'invert ?(.*)',

		fromMe: x,

    dontAddCommandList: true,

		desc: 'add a invert filter',

		type: 'misc',

	},async (message, match) => {

if (!message.reply_message) return await message.sendReply("*Need image*");

var imageUrl = await message.reply_message.download();

   let { link } = await upload(imageUrl)

    return await message.sendMessage(await skbuffer (`https://some-random-api.ml/canvas/invert?avatar=${link}`), 'image')}); 

Module(

	{

		pattern: '2invert ?(.*)',

		fromMe: x,

    dontAddCommandList: true,

		desc: 'add a invert filter',

		type: 'misc',

	},async (message, match) => {

if (!message.reply_message) return await message.sendReply("*Need image*");

var imageUrl = await message.reply_message.download();

   let { link } = await upload(imageUrl)

    return await message.sendMessage(await skbuffer (`https://some-random-api.ml/canvas/invertgreyacale?avatar=${link}`), 'image')}); 

Module(

	{

		pattern: 'golden ?(.*)',

		fromMe: x,

    dontAddCommandList: true,

		desc: 'add a golden filter',

		type: 'misc',

	},async (message, match) => {

if (!message.reply_message) return await message.sendReply("*Need image*");

var imageUrl = await message.reply_message.download();

   let { link } = await upload(imageUrl)

    return await message.sendMessage(await skbuffer (`https://some-random-api.ml/canvas/sepia?avatar=${link}`), 'image')});

Module(

	{

		pattern: 'simpcard ?(.*)',

		fromMe: x,

    dontAddCommandList: true,

		desc: 'simpcard maker',

		type: 'misc',

	},async (message, match) => {

if (!message.reply_message) return await message.sendReply("*Need image*");

var imageUrl = await message.reply_message.download();

   let { link } = await upload(imageUrl)

    return await message.sendMessage(await skbuffer (`https://some-random-api.ml/canvas/simpcard?avatar=${link}`), 'image')});

Module(

	{

		pattern: 'threshold ?(.*)',

		fromMe: x,

    dontAddCommandList: true,

		desc: 'add a threshold filter',

		type: 'misc',

	},async (message, match) => {

if (!message.reply_message) return await message.sendReply("*Need image*");

var imageUrl = await message.reply_message.download();

   let { link } = await upload(imageUrl)

    return await message.sendMessage(await skbuffer (`https://some-random-api.ml/canvas/threshold?avatar=${link}`), 'image')});
