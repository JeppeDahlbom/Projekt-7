<script setup>

const playersDummy = [
  {
    firstName: "Martin",
    lastName: "Hansen",
    number: 1,
    favourite: false,
    position: "Målmand"
  },
  {
    firstName: "Viljar",
    lastName: "Myhra",
    number: 16,
    favourite: false,
    position: "Målmand"
  },
  {
    firstName: "Nicholas",
    lastName: "Mickelson",
    number: 2,
    favourite: false,
    position: "Forsvarer"
  },
  {
    firstName: "Adam",
    lastName: "Sørensen",
    number: 3,
    favourite: false,
    position: "Forsvarer"
  },
  {
    firstName: "Bjørn",
    lastName: "Paulsen",
    number: 4,
    favourite: false,
    position: "Forsvarer"
  },
  {
    firstName: "Julius",
    lastName: "Berthel Askou Harvey",
    number: 13,
    favourite: false,
    position: "Forsvarer"
  },
  {
    firstName: "Marcus",
    lastName: "McCoy",
    number: 15,
    favourite: false,
    position: "Forsvarer"
  },
  {
    firstName: "Leeroy",
    lastName: "Owusu",
    number: 20,
    favourite: false,
    position: "Forsvarer"
  },
  {
    firstName: "Yaya",
    lastName: "Bojang",
    number: 24,
    favourite: false,
    position: "Forsvarer"
  },
  {
    firstName: "Nicolas",
    lastName: "Bürgy",
    number: 25,
    favourite: false,
    position: "Forsvarer"
  },
  {
    firstName: "James",
    lastName: "Gomez",
    number: 29,
    favourite: false,
    position: "Forsvarer"
  },
  {
    firstName: "Jakob",
    lastName: "Bonde",
    number: 6,
    favourite: false,
    position: "Midtbane"
  },
  {
    firstName: "Tom",
    lastName: "Trybull",
    number: 7,
    favourite: false,
    position: "Midtbane"
  },
  {
    firstName: "Markus",
    lastName: "Jensen",
    number: 11,
    favourite: false,
    position: "Midtbane"
  },
  {
    firstName: "Gustav",
    lastName: "Grubbe",
    number: 14,
    favourite: false,
    position: "Midtbane"
  },
  {
    firstName: "Max",
    lastName: "Ejdum",
    number: 18,
    favourite: false,
    position: "Midtbane"
  },
  {
    firstName: "Nikolaj",
    lastName: "Jull-Sandberg",
    number: 21,
    favourite: false,
    position: "Midtbane"
  },
  {
    firstName: "William",
    lastName: "Martin",
    number: 23,
    favourite: false,
    position: "Midtbane"
  },
  {
    firstName: "Don",
    lastName: "Deedson Louicius",
    number: 10,
    favourite: false,
    position: "Angriber"
  },
  {
    firstName: "Luca",
    lastName: "Kjerrumgaard",
    number: 17,
    favourite: false,
    position: "Angriber"
  },
  {
    firstName: "Elias",
    lastName: "Hansborg-Sørensen",
    number: 26,
    favourite: false,
    position: "Angriber"
  },
  {
    firstName: "Jay-Roy",
    lastName: "Grot",
    number: 31,
    favourite: false,
    position: "Angriber"
  }
];
//sortere object listen
playersDummy.sort((a, b) => a.number - b.number);

</script>

<template>
    <div class="background">
    <h2 class="titleMark">Målmand</h2>
        <div class="playerCard" v-for="player in playersDummy.filter(p => p.position === 'Målmand')">
            <div class="" >
                <h2 class="number">#{{ player.number }}</h2>
                <h2 class="name">{{ player.firstName }} {{ player.lastName }}</h2>
                <img :src="`/assets/images/holdet/${player.firstName.replace(' ', '')}${player.lastName.replace(' ', '')}.png`" alt="">
            </div>

        </div>
        </div>
</template>

<style scoped>
.background{
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 20px;
}
.background .playerCard{
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
}
.background .playerCard .number{
    font-size: 30px;
}
.background .playerCard .name{
    font-size: 20px;
}


</style>