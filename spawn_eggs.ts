import {
    ensureDir
} from "https://deno.land/std@0.127.0/fs/mod.ts"

await ensureDir("./recipes").then(() => {
    console.log(`Checking if 'recipes' directory exists, if not, it will be created.`)
})

const entities: string[] = [
    "elder_guardian.sponge",
    "wither_skeleton.coal",
    "stray.arrow",
    "husk.sand",
    "zombie_villager.emerald",
    "skeleton_horse",
    "zombie_horse",
    "donkey",
    "mule",
    "evoker",
    "vex",
    "vindicator",
    "creeper",
    "skeleton",
    "spider",
    "zombie",
    "slime",
    "ghast",
    "zombie_pigman",
    "enderman",
    "cave_spider",
    "silverfish",
    "blaze",
    "magma_cube",
    "bat",
    "witch",
    "witch",
    "endermite",
    "guardian",
    "shulker",
    "pig",
    "sheep",
    "cow",
    "chicken",
    "squid",
    "wolf",
    "mooshroom",
    "ocelot",
    "parrot",
    "horse",
    "rabbit",
    "polar_bear",
    "llama",
    "villager",
    "turtle",
    "cod",
    "salmon",
    "pufferfish",
    "phantom",
    "tropical_fish",
    "drowned",
    "dolphin",
    "cat",
    "fox",
    "panda",
    "pillager",
    "ravager",
    "wandering_trader",
    "bee",
    "hoglin",
    "piglin",
    "piglin_brute",
    "strider",
    "zoglin",
    "glow_squid",
    "goat",
    "axolotl"
]

// entities.forEach(entity => {
//     const file = `./recipes/spawn_${entity}.json`
//     const content = {
//         "format_version": "1.17.0",
//         "minecraft:shapeless_recipe": {

//         }
//     }
//         Deno.writeTextFile(file, JSON.stringify(content))
//     }
// )