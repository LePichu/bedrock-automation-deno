// Licensed under MIT License - LePichu 2022
// This was made for "Craftable Eggs" by "ShapeStudios"

import {
    ensureDir
} from "https://deno.land/std@0.127.0/fs/mod.ts"

import { green, red } from "https://deno.land/std@0.127.0/fmt/colors.ts"

await ensureDir("./recipes").then(() => {
    console.log(`Checking if 'recipes' directory exists, if not, it will be created.`)
})

const entList: string[] = [
    "elder_guardian.sponge",
    "wither_skeleton.coal",
    "stray.snowball",
    "husk.sand",
    "zombie_villager.rotten_flesh",
    "skeleton_horse.bonemeal",
    "zombie_horse.saddle",
    "donkey.chest",
    "mule.lead",
    "evoker.totem_of_undying",
    "vex.iron_sword",
    "vindicator.iron_axe",
    "creeper.gunpowder",
    "skeleton.skeleton_skull",
    "spider.spider_eye",
    "zombie.zombie_skull",
    "slime.slime_ball",
    "ghast.ghast_tear",
    "zombie_pigman.golden_sword",
    "enderman.ender_pearl",
    "cave_spider.cobweb",
    "silverfish.mossy_cobblestone",
    "blaze.blaze_rod",
    "magma_cube.magma_cream",
    "bat.infested_deepslate",
    "witch.glass_bottle",
    "endermite.ender_eye",
    "guardian.prismarine_shard",
    "shulker.shulker_shell",
    "pig.porkchop",
    "sheep.mutton",
    "cow.beef",
    "chicken.chicken",
    "squid.inc_sac",
    "wolf.bone",
    "mooshroom.red_mushroom",
    "ocelot.cooked_cod",
    "parrot.wheat_seeds",
    "horse.leather",
    "rabbit.rabbit",
    "polar_bear.cooked_salmon",
    "llama.white_carpet",
    "villager.emerald",
    "turtle.seagrass",
    "cod.cod",
    "salmon.salmon",
    "pufferfish.pufferfish",
    "phantom.phantom_membrane",
    "tropical_fish.tropical_fish",
    "drowned.trident",
    "dolphin.heart_of_the_sea",
    "cat.music_disc_cat",
    "fox.sweet_berries",
    "panda.bamboo",
    "pillager.crossbow",
    "ravager.pumpkin_seeds",
    "wandering_trader.filled_map",
    "bee.honeycomb",
    "hoglin.crimson_fungus",
    "piglin.gold_ingot",
    "piglin_brute.golden_axe",
    "strider.string",
    "zoglin.crimson_roots",
    "glow_squid.glow_inc_sac",
    "goat.powder_snow_bucket",
    "axolotl.clay_ball"
]

async function createShapelessEggRecipe(item: string, entity: string) {
    const recipeTemplate = {
        "format_version": "1.12.0",
        "minecraft:recipe_shapeless": {
            "tags": [
                "crafting_table"
            ],
            "ingredients": [
                {
                    "item": `minecraft:${item}`
                },
                {
                    "item": `minecraft:egg`
                }
            ],
            "result": {
                "item": `minecraft:${entity}_spawn_egg`,
                "count": 1
            },
            "description": {
                "identifier": `eggs:${entity}_egg`
            }
        }
    }
    await Deno.writeTextFile(`./recipes/${entity}_egg.json`, JSON.stringify(recipeTemplate, null, "\t"))
    return console.log(`${green("[✅]")} File written to ${red(`${entity}.json`)}.`)
}

entList.forEach((e) => {
    createShapelessEggRecipe(e.split('.')[1], e.split('.')[0])
})

// createShapelessEggRecipe(entList[0].split('.')[1], entList[0].split('.')[0])