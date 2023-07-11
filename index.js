//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const welcome2 = 'We are so glad to have you here!';
const organization = 'ORGANIZATION'
const logoUrl = '/images/logo.jpg';
const card2 = " Helping Hands: Donate to "
const Orphanages = 'Orphanages'
const leftDiv1 = "Orphanages have been a traditional solution for providing care to children who have lost their parents or have been abandoned. These institutions have played an important role in the lives of many children, offering them a place to live, food to eat, and education. However, orphanages have been criticized for their institutional nature and their potential to cause harm to children's development. "
const leftDiv2 ="Research has shown that children who grow up in orphanages may experience developmental delays, attachment issues, and mental health problems. This is because orphanages lack the individualized attention and affection that children need to thrive. In recent years, there has been a shift toward alternative care models such as foster care and adoption, which prioritize family-based care over institutional care. While orphanages may still be necessary in some cases, it is important to ensure that they are providing high-quality care that meets the unique needs of each child."
const donate = "Donate Online"
const rightDiv1 = "Help us to keep making these kids live special by donating online"
const rightDiv2 = "Be a part of the family"
const rightDiv3 = "We are excited to announce that as of 2019 we are partnering with Global Giving to facilitate donations to our organization; not only do they offer tax-deductibility in the US/UK and a great site to manage/track your contributions they also often match or add bonus amounts to donations"
const will = "Your donation will"
const cardDiv1 = "Support an Orphan Girl In Need For One Full Year"
const cardDiv2 = "Buy a Stepping Stone and Help Build an Orphanage"
const cardDiv3 = "Provide One Year Higher Education for an Orphan Girl"
const cardDiv4 = "Feed an Entire Orphanage for One Week"
const quote = "“That’s why it makes perfect sense that when people ask me what my parents’ favorite thing about me was, I say my smile. Because even though they couldn’t be here with me every day, their love has given me so much happiness anyway.“"

app.get("/",function(req, res){
  
  const backgroundImage = "/images/1.jpg";
  const two = "/images/2.jpg";
  const three = "/images/3.jpg";
  const four = "/images/4.jpg";
  const five = "/images/5.jpg";
  const six = "/images/6.jpg";
  res.render("home", { 
    logoUrl, 
    backgroundImage,
    welcome2 : welcome2,
    organization : organization,
    two,
    three,
    four,
    five,
    six,
    card2,
    Orphanages,
    leftDiv1,
    leftDiv2,
    donate,
    rightDiv1,
    rightDiv2,
    rightDiv3,
    will,
    cardDiv1,
    cardDiv2,
    cardDiv3,
    cardDiv4,
    quote

  })
})


app.get('/typewriter.js', (req, res) => {
  res.sendFile(__dirname + '/typewriter.js');
});

app.get("/orphanage", function(req,res){
  const orp1 = "Aadarana";
  const add1 = "HNO.20-17/C,Kodanadaramnagar,P&T Colony, Dilsukhnagar, Hyderabad-500060Andhra Pradesh – INDIA";
  const state1 = "State: Andhra Pradesh";
  const more = "Read More";
  const img1 = "images/Aadarana.jpg"

  const orp2 = "Affus Woman Welfare Association";
  const add2 = "10-303, Gulzarpet, Anantapur – 515001 Andhrapradesh India";
  const state2 = "State: Andhra Pradesh";
  const img2 = "images/affus.jpg";


  const orp3 = "Ananda Marga Education And Welfare Society";
  const add3 = "17-1-390/C, Laxmi Nagar, Saidabad Colony, Hyderabad Hyderabad – 500 059 India";
  const state3 = "State: Andhra Pradesh";
  const img3 = "images/anada.jpg";

  const orp4 = "SOS Children's Villages";
  const add4 = "SOS Children’s Village BANGALORE 49-Hulimavu, Bannerghatta Road SOS POST, Nr. Meenakshi Temple Banglore-560076 KARNATAKA Ph. No: (080)-26583615, 26583882";
  const state4 = "State: Karnataka";
  const img4 = "images/sos.jpg";

  const orp5 = "Mother India Orphans Home";
  const add5 = "16-86, New Mirzalguda, Malkajgiri Hyderabad";
  const state5 = "State: Andhra Pradesh";
  const img5 = "images/mother.jpg";

  const orp6 = "Aruna Oldage and Orphans Childrens Ashramam";
  const add6 = "20-4/1-12B Near Srinivas Public School Road, Subbar Raju Nagar, New Rajarajeswari Peta, Rajarajeswari Peta, Vijayawada";
  const state6 = "State: Andhra Pradesh";
  const img6 = "images/aruna.jpg";

  const orp7 = "Maranatha Children home vijayawada-India";
  const add7 = "Gayathri Nagar, Vijayawada, Andhra Pradesh 520008";
  const state7 = "State: Andhra Pradesh";
  const img7 = "images/maranatha.jpg";

  const orp8 = "Dazzling Stone Orphanage";
  const add8 = "Sarasvathy Nagar, Sirukalathur, Kundrathur, Chennai, Tamil Nadu 600069";
  const state8 = "State: Tamil Nadu";
  const img8 = "images/dazzling.jpg";
  
  const orp9 = "DM Jariwala Orphanage Trust";
  const add9 = "D M Jariwala Orphan, 27 Fort Road, Mahim, Mumbai, Maharashtra 400016	";
  const state9 = "State: Maharashtra";
  const img9 = "images/jariwala.jpg";

  const orp10 = "Asha Kiran Orphanage";
  const add10 = "Ms-163, Maruti Residency, Raghunathpur, Near Shiv Temple, Opp Bank Of India, Patia, Bhubaneshwar, Odisha 751024";
  const state10 = "State: Odisha";
  const img10 = "images/ashakiran.jpg";

  const orp11 = "Cherish Orphanage";
  const add11 = "sai Baba Nagar Colony, Bhadurpura, Telangana 500030";
  const state11 = "State: Telangana";
  const img11 = "images/cherish.jpg";

  const orp12 = "Mother Theresa Children Orphanage- Naidupet";
  const add12 = "Pogagottam Centre, Naidupet, Nellore District, AP, Naidupeta, Andhra Pradesh 524126";
  const state12 = "State: Andhra Pradesh";
  const img12 = "images/theresa.jpg";



  res.render("orphanage",{ 
    logoUrl,
    more,
    
    orp1,
    add1,
    state1,
    img1,

    orp2,
    add2,
    state2,
    img2,

    orp3,
    add3,
    state3,
    img3,

    orp4,
    add4,
    state4,
    img4,

    orp5,
    add5,
    state5,
    img5,

    orp6,
    add6,
    state6,
    img6,

    orp7,
    add7,
    state7,
    img7,

    orp8,
    add8,
    state8,
    img8,

    orp9,
    add9,
    state9,
    img9,

    orp10,
    add10,
    state10,
    img10,

    orp11,
    add11,
    state11,
    img11,

    orp12,
    add12,
    state12,
    img12,
  

  });
});

app.get("/contact", function(req,res){
  const questions = "Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you."
  res.render("contact",{ 
    logoUrl,
    questions,
  });
});

app.get("/donate", function(req,res){
  res.render("donate",{ 
    logoUrl});
});

app.get("/header", function(req,res){
  res.redirect("donate");
});

















app.listen(3000, function() {
  console.log("Server started on port 3000");
});
