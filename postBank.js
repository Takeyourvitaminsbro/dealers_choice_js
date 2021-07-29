const data = [
    { id: 1, name: "Harry James Potter", aka: "The Chosen One", house: "Gryffindor", blood: "Half-blood", wand: `11", Holly, phoenix feather core`, patronus: "Stag", pic: `https://www.google.com/search?q=harry+potter+img&rlz=1C5CHFA_enUS823US823&tbm=isch&source=iu&ictx=1&fir=BHPBgPs7NgUJzM%252CKRV65mpSLaUVBM%252C_&vet=1&usg=AI4_-kRO7WUKqnp1McvlWDLKFfoA4BEn0g&sa=X&ved=2ahUKEwjIwrj4uIbyAhUSvJ4KHQXgDUMQ9QF6BAgTEAE#imgrc=BHPBgPs7NgUJzM` },
    { id: 2, name: "Tom Riddle", aka: "Lord Voldemort", house: "Slytherin", blood: "Half-blood", wand: `13½", Yew, phoenix feather core`, patronus: "none", pic: `https://static.wikia.nocookie.net/harrypotter/images/a/aa/Voldemort_Headshot_DHP1.png/revision/latest/scale-to-width-down/350?cb=20161203031453` },
    { id: 3, name: "Professor Albus Dumbledor", aka: "Professor", house: "Gryffindor", blood: "Half-blood", wand: `15", Elder, Thestral tail hair core`, patronus: "Phoenix", pic: `https://static.wikia.nocookie.net/harrypotter/images/4/40/Albus_Dumbledore_%28HBP_promo%29_3.jpg/revision/latest/scale-to-width-down/350?cb=20150822232849` },
    { id: 4, name: "Draco Malfoy", aka: "Malfoy", house: "Slytherin", blood: "Pure-blood", wand: `10", Hawthorn, unicorn hair`, patronus: "none", pic: `https://static.wikia.nocookie.net/harrypotter/images/7/7e/Draco_Malfoy_TDH.png/revision/latest/scale-to-width-down/350?cb=20180116013508` },
    { id: 5, name: "Ronald Weasley", aka: "Ron", house: "Gryffindor", blood: "Pure-blood", wand: `14", Willow, unicorn tail hair`, patronus: "Jack Russel terrier", pic: `https://static.wikia.nocookie.net/harrypotter/images/8/85/Ron_Weasley.jpg/revision/latest/scale-to-width-down/350?cb=20101104210200` },
    { id: 6, name: "Hermione Jean Granger", aka: "Queen Slug", house: "Gryffindor", blood: "Muggle-born", wand: `10¾", vine wood, dragon heartstring core`, patronus: "Otter", pic: `https://static.wikia.nocookie.net/harrypotter/images/3/34/Hermione_Granger.jpg/revision/latest?cb=20210522145306` },
    { id: 7, name: "Professor Severus Snape", aka: "Half-Blood Prince", house: "Slytherin", blood: "Half-blood", wand: `Unknown`, patronus: "Doe", pic: `https://static.wikia.nocookie.net/harrypotter/images/a/a3/Severus_Snape.jpg/revision/latest/scale-to-width-down/335?cb=20150307193047` },
    { id: 8, name: "Rubeus Hagrid", aka: "Hagrid", house: "Gryffindor", blood: "Half-giant", wand: `16", Oak, unknown core`, patronus: "none", pic: `https://static.wikia.nocookie.net/harrypotter/images/f/fe/Rubeus_Hagrid.png/revision/latest/scale-to-width-down/350?cb=20161123044204` },
    { id: 9, name: "Luna Lovegood", aka: "Loony Lovegood", house: "Ravenclaw", blood: "Pure-blood", wand: `Unknown`, patronus: "Hare", pic: `https://static.wikia.nocookie.net/harrypotter/images/e/ed/Luna_Lovegood.jpg/revision/latest/scale-to-width-down/336?cb=20160902165706` },
    { id: 10, name: "Ginerva Weasley", aka: "Ginny", house: "Gryffindor", blood: "Pure-blood", wand: `Unknown`, patronus: "Horse", pic: `https://static.wikia.nocookie.net/harrypotter/images/8/8b/Ginny_Weasley_hbp_promo.jpg/revision/latest/scale-to-width-down/350?cb=20090317022440` },
    { id: 11, name: "Professor Minerva McGonagall", aka: "n/a", house: "Gryffindor", blood: "Half-blood", wand: `9½", Fir, dragon heartstring`, patronus: "Cat", pic: `https://static.wikia.nocookie.net/harrypotter/images/6/65/ProfessorMcGonagall-HBP.jpg/revision/latest/scale-to-width-down/350?cb=20100612114856` },
    { id: 12, name: "Neville Longbottom", aka: "n/a", house: "Gryffindor", blood: "Pure-blood", wand: `13", Cherry, unicorn hair`, patronus: "Non-corporeal", pic: `https://static.wikia.nocookie.net/harrypotter/images/0/04/Harry-potter-and-the-deathly-hallowspart-2.jpg/revision/latest/scale-to-width-down/350?cb=20161120035218` },
    { id: 13, name: "Bellatrix Lestrange", aka: "Bella", house: "Slytherin", blood: "Pure-blood", wand: `12¾", Walnut, dragon heartstring`, patronus: "none", pic: `https://static.wikia.nocookie.net/harrypotter/images/1/14/BellatrixLestrange.png/revision/latest/scale-to-width-down/295?cb=20171101034243` },
    { id: 14, name: "Sirius Black", aka: "Padfoot", house: "Gryffindor", blood: "Pure-blood", wand: `Unknown`, patronus: "Non-corporeal", pic: `https://static.wikia.nocookie.net/harrypotter/images/b/bc/OOTP_promo_front_closeup_Sirius_Black.jpg/revision/latest/scale-to-width-down/335?cb=20150918055024` },
    { id: 15, name: "Fred Weasley", aka: "Freddie", house: "Gryffindor", blood: "Pure-blood", wand: `Unknown`, patronus: "Magpie", pic: `https://static.wikia.nocookie.net/harrypotter/images/9/90/Fred_HS_TDH_promo.jpg/revision/latest/scale-to-width-down/350?cb=20161119235258` },
    { id: 16, name: "Remus Lupin", aka: "Romulus", house: "Gryffindor", blood: "Half-blood", wand: `10¼", Cypress, unicorn hair`, patronus: "Wolf", pic: `https://static.wikia.nocookie.net/harrypotter/images/e/e2/Remus_Lupin_Deathly_Hallows_promo_image.jpg/revision/latest/scale-to-width-down/350?cb=20161119235913` },
  ];

  const list = () => {
    return [...data];
  }

  const find = (id) => {
    const post = data.find(post => post.id === +id);
    return {...post};
  }

  module.exports = { list: list, find: find};