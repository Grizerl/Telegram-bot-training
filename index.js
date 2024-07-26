const {Telegraf, Markup}=require('telegraf')
require('dotenv').config()
const text=require('./const')
const text2 =require('./text') 
const text3 = require("./button")

const bot = new Telegraf(process.env.Bot_Token);
bot.start((ctx) => ctx.reply('Welcom my telegram bot'))
bot.help((ctx) => ctx.reply(text.commands))
bot.command('course', async (ctx) =>{
try{
     await ctx.replyWithHTML(text2.text, Markup.inlineKeyboard(
    [
        [Markup.button.callback('Методичка 📚','btn-1'),Markup.button.callback('Аналітика 📊','btn-2')],
        [Markup.button.callback('Розробка 💻','btn-3'),Markup.button.callback('Дизайн 🎨','btn-4')],
        [Markup.button.callback('Маркетинг 🧑🏿‍💻','btn-5')],
        [Markup.button.callback('На головну🏠','btn-6')]
    ]
)) 
} catch(e){
    console.error(e)
}
})
bot.action('btn-1', async (ctx) => {
    try{ 
    await ctx.replyWithHTML( text3.textbutton,Markup.inlineKeyboard(
        [
            [Markup.button.callback( '1','btn-11'),Markup.button.callback( '2','btn-12'),Markup.button.callback( '3','btn-13')],
            [Markup.button.callback( '4','btn-14'),Markup.button.callback( '5','btn-15')]
        ]
    )) 
    }catch(e){
        console.error(e)
    } 
}) 
bot.action('btn-11', async (ctx) =>{
    try{
    await ctx.replyWithHTML(text3.text11,Markup.inlineKeyboard(
        [
            [Markup.button.callback('На головну🏠','btn-16')] 
        ]
    ))
    }catch(e){
        console.error(e)
    }
})
bot.action('btn-12', async(ctx) =>{
   try{
    await ctx.replyWithHTML(text3.text12,Markup.inlineKeyboard(
        [
           [Markup.button.callback('На головну🏠','btn-16')]
        ]
    ))
   }catch(e){
    console.error(e) 
   }
})
bot.action('btn-13', async(ctx) =>{
    try{
    await ctx.replyWithHTML(text3.text13,Markup.inlineKeyboard(
        [
            [Markup.button.callback('На головну🏠','btn-16')]
        ]
    ))
    }catch(e){
        console.error(e)
    }
})
bot.action('btn-14', async(ctx) =>{
    try{
    await ctx.replyWithHTML(text3.text14,Markup.inlineKeyboard(
        [
            [Markup.button.callback('На головну🏠','btn-16')]
        ]
    ))
    }catch(e){
        console.error(e)
    }
})
bot.action('btn-15', async(ctx) =>{
    try{
    await ctx.replyWithHTML(text3.text15,Markup.inlineKeyboard(
        [
            [Markup.button.callback('На головну🏠','btn-16')]
        ]
    ))
    }catch(e){  
        console.error(e)
    }
})
bot.action('btn-16', async(ctx) =>{
    try{ 
    await ctx.replyWithHTML('Ви в головному меню!',Markup.inlineKeyboard(
        [
            [Markup.button.callback('Методичка 📚','btn-1'),Markup.button.callback('Аналітика 📊','btn-2')],
        [Markup.button.callback('Розробка 💻','btn-3'),Markup.button.callback('Дизайн 🎨','btn-4')],
        [Markup.button.callback('Маркетинг 🧑🏿‍💻','btn-5')],
        ]
    ))
    }catch(e){
        console.error(e)
    }
})
bot.action('btn-2',async (ctx) =>{
   try{
    await ctx.replyWithHTML(text3.text20,Markup.inlineKeyboard(
        [
            [Markup.button.callback('1','btn-21'),Markup.button.callback('2','btn-22'),Markup.button.callback('3','btn-23')],
            [Markup.button.callback('4','btn-24'),Markup.button.callback('5','btn-25')]
        ]
    ))
   }catch(e){
    console.error(e)
   }
    })
    bot.action('btn-21',async (ctx) =>{
       try{
        await ctx.replyWithHTML(text3.text21,Markup.inlineKeyboard(
            [
                [Markup.button.callback('На головну🏠','btn-16')]
            ]
        ))} catch(e){
console.error(e)
        }
    }) 
    bot.action('btn-22', async(ctx) =>{
       try{
        await ctx.replyWithHTML(text3.text15,Markup.inlineKeyboard(
            [
                [Markup.button.callback('На головну🏠','btn-16')]
            ]
        ))
    }catch(e){
        console.error(e)
    }
    })
    bot.action('btn-23', async(ctx) =>{
       try{
        await ctx.replyWithHTML(text3.text15,Markup.inlineKeyboard(
            [
                [Markup.button.callback('На головну🏠','btn-16')]
            ]
        ))
    }catch(e){
        console.error(e)
    }
    })
    bot.action('btn-24', async(ctx) =>{
        try{ 
        await ctx.replyWithHTML(text3.text15,Markup.inlineKeyboard(
            [
                [Markup.button.callback('На головну🏠','btn-16')]
            ]
        ))
        }catch(e){
            console.error(e)
        }
    })
    bot.action('btn-25', async(ctx) =>{
       try{
        await ctx.replyWithHTML(text3.text15,Markup.inlineKeyboard(
            [
                [Markup.button.callback('На головну🏠','btn-16')]
            ]
        ))
       }catch(e){
        console.error(e)
       }
    })
    bot.action('btn-3', async(ctx) =>{
       try{
        await ctx.replyWithHTML(text3.text30,Markup.inlineKeyboard(
            [
                [Markup.button.callback('1','btn-31'),Markup.button.callback('2','btn-32'),Markup.button.callback('3','btn-33')],
                [Markup.button.callback('4','btn-34')]
            ]
        ))
       }catch(e){
        console.error(e)
       }
    })
    bot.action('btn-31', async(ctx) =>{
       try{
        await ctx.replyWithHTML(text3.text31,Markup.inlineKeyboard(
            [
                [Markup.button.callback('На головну🏠','btn-16')]
            ]
        ))
       }catch(e){
        console.error(e)
       }
    })
    bot.action('btn-32', async (ctx) =>{
       try{
        await ctx.replyWithHTML(text3.text32,Markup.inlineKeyboard(
            [
               [Markup.button.callback('На головну🏠','btn-16')]
            ]
        ))
       }catch(e){
        console.error(e)
       }
    })
    bot.action('btn-33', async (ctx) =>{
       try{
        await ctx.replyWithHTML(text3.text33,Markup.inlineKeyboard(
            [
                [Markup.button.callback('На головну🏠','btn-16')]
            ]
        ))
       }catch(e){
        console.error(e)
       }
    })
    bot.action('btn-34', async(ctx) =>{
       try{
        await ctx.replyWithHTML(text3.text34,Markup.inlineKeyboard(
            [
               [Markup.button.callback('На головну🏠','btn-16')]
            ]
        ))
       }catch(e){
        console.error(e)
       }
    })
    bot.action('btn-4',async (ctx) =>{
       try{
        await ctx.replyWithHTML('Виберіть розділ для вивчення',Markup.inlineKeyboard(
          [
            [Markup.button.callback( 'Промисловий дизайн','btn-41'),Markup.button.callback( 'Графічний дизайн','btn-42')],
            [Markup.button.callback( 'Дизайн середовища','btn-43'),Markup.button.callback( 'Арт-дизайн','btn-44')],
          ] 
          ))
        }catch(e){
            console.error(e)
          }
    })
    bot.action('btn-41', async(ctx) =>{
       try{
        await ctx.replyWithHTML(text3.text41,Markup.inlineKeyboard(
            [
                [Markup.button.callback('На головну🏠','btn-16')]
            ]
        ))
       }catch(e){
        console.error(e)
       }
    })
    bot.action('btn-42', async(ctx) =>{
        try{ 
        await ctx.replyWithHTML(text3.text42,Markup.inlineKeyboard(
            [
               [Markup.button.callback('На головну🏠','btn-16')]
            ]
        ))
        }catch(e){
            console.error(e)
        }
    })
    bot.action('btn-43', async(ctx) =>{
       try{
        await ctx.replyWithHTML(text3.text43,Markup.inlineKeyboard(
            [
                [Markup.button.callback('На головну🏠','btn-16')]
            ]
        ))
    }catch(e){
        console.error(e)
    }
    })
    bot.action('btn-44', async(ctx) =>{
       try{
        await ctx.replyWithHTML(text3.text44,Markup.inlineKeyboard(
            [
                [Markup.button.callback('На головну🏠','btn-16')]
            ]
        ))
       }
       catch(e){
        console.error(e)
       }
    }) 
    bot.action('btn-5', async(ctx) =>{
        try{ 
        await ctx.replyWithHTML(text3.text50,Markup.inlineKeyboard( 
            [
                [Markup.button.callback('На головну🏠','btn-16')]
            ]
        ))
        }
        catch(e){
            console.error(e)
        } 
    }) 


bot.launch()

process.once('SIGINT', () =>bot.stop('SIGINT'))
process.once('SIGTERM', () =>bot.stop('SIGTERM')) 