import { Box } from "@mui/material";
import "../Footer/Footer.css";
import styled from "styled-components";
import { useTheme } from "../Context/Context";


const FooterLink = styled.a`
  color: #c0c0c0;
  font-size: 11px;
  text-decoration: none;

  &:hover {
    color: #808080;
    transition: 200ms ease-in;
  }`;



function Footer() {

  const {theme, toggleTheme} = useTheme();
  
  return (
    <>
      <Box className=" main-container bg-[#282b2f] pt-8 px-[6%] footer-data">
        <Box className="text-center">
          <h3 className="font-bold my-4">Bas Bajna Chahiye Gaana</h3>
          <p className="text-xs font-thin">
            Gaana is your gateway to the best and latest in music, offering over
            30 million songs across diverse languages including Hindi, English,
            Bollywood, and regional tracks. Stream your favourite Hindi songs,
            Bollywood music, English MP3 songs, radio, podcast and regional
            music online or download songs to enjoy anytime, anywhere!
          </p>
        </Box>
        <hr />
        <Box className="flex justify-center">
          <Box className="px-2">
            <p className="text-xs font-thin text-center">KEEP IN TOUCH</p>
            <Box className="flex">
              <img
                className="px-2"
                src="./assets/icons/facebook.svg"
                alt="facebookIcon"
              />
              <img
                className="px-2"
                src="./assets/icons/twitter.svg"
                alt="twitterIcon"
              />
            </Box>
          </Box>

          <Box className="vl"></Box>

          <Box className="px-2">
            <p className="text-xs font-thin text-center">EXPERIENCE APP</p>
            <Box className="flex">
              <img
                className="px-2"
                src="./assets/icons/playStore.svg"
                alt="playStoreIcon"
              />
              <img
                className="px-2"
                src="./assets/icons/appStoreI.svg"
                alt="appStoreIcon"
              />
            </Box>
          </Box>
        </Box>
        <hr />

        <Box className="flex justify-center gap-x-4 py-1 text-white">
          <FooterLink className="link-m footer-data" href="#">
            Terms of Use
          </FooterLink>
          <FooterLink
            className="link-m footer-data hover:text-[#808080]"
            href="#"
          >
            Privacy Policy
          </FooterLink>
          <FooterLink
            className="link-m footer-data hover:text-[#808080]"
            href="#"
          >
            About Us
          </FooterLink>
          <FooterLink
            className="link-m footer-data hover:text-[#808080]"
            href="#"
          >
            FAQ
          </FooterLink>
        </Box>

        <hr />

        <Box className="text-center py-2">Quicklinks</Box>
        <Box>
          <Box className="flex justify-evenly pb-4">
            <Box className="">
              <Box className="py-2">
                <span>Albums</span>
              </Box>
              <Box className="flex flex-col gap-y-2">
                <FooterLink className="link" href="#">
                  English
                </FooterLink>
                <FooterLink className="link" href="#">
                  Hindi
                </FooterLink>
                <FooterLink className="link" href="#">
                  Telugu
                </FooterLink>
                <FooterLink className="link" href="#">
                  Punjabi
                </FooterLink>
                <FooterLink className="link" href="#">
                  Tamil
                </FooterLink>
                <FooterLink className="link" href="#">
                  Kannada
                </FooterLink>
                <FooterLink className="link" href="#">
                  Bhojpuri
                </FooterLink>
                <FooterLink className="link" href="#">
                  Malayalam
                </FooterLink>
                <FooterLink className="link" href="#">
                  Marathi
                </FooterLink>
                <FooterLink className="link" href="#">
                  Bengali
                </FooterLink>
                <FooterLink className="link" href="#">
                  Gujarati Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  Haryanvi
                </FooterLink>
                <FooterLink className="link" href="">
                  <span className="text-[#FF0000]"> View all </span>
                </FooterLink>
              </Box>
            </Box>
            <Box>
              <Box className="py-2">
                <span>Genres</span>
              </Box>
              <Box className="flex flex-col gap-y-2">
                <FooterLink className="link" href="#">
                  Bollywood Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  Devotional Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  Ghazals
                </FooterLink>
                <FooterLink className="link" href="#">
                  Bhajan
                </FooterLink>
                <FooterLink className="link" href="#">
                  Patriotic Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  Kids Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  Rock Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  Disco Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  Sufi Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  Love Songs
                </FooterLink>
                <FooterLink className="link" href="">
                  <span className="text-[#FF0000]"> View all </span>
                </FooterLink>
              </Box>
            </Box>
            <Box>
              <Box className="py-2">
                <span>Artists</span>
              </Box>
              <Box className="flex flex-col gap-y-2">
                <FooterLink className="link" href="#">
                  Arijit Singh
                </FooterLink>
                <FooterLink className="link" href="#">
                  Neha Kakkar
                </FooterLink>
                <FooterLink className="link" href="#">
                  Honey Singh
                </FooterLink>
                <FooterLink className="link" href="#">
                  Atif Aslam
                </FooterLink>
                <FooterLink className="link" href="#">
                  A R Rahman
                </FooterLink>
                <FooterLink className="link" href="#">
                  Lata Mangeshkar
                </FooterLink>
                <FooterLink className="link" href="#">
                  Kishore Kumar
                </FooterLink>
                <FooterLink className="link" href="#">
                  Armaan Malik
                </FooterLink>
                <FooterLink className="link" href="#">
                  Sunidhi Chauhan
                </FooterLink>
                <FooterLink className="link" href="#">
                  Nusrat Fateh Ali Khan
                </FooterLink>
                <FooterLink className="link" href="#">
                  Mohammed Rafi
                </FooterLink>
                <FooterLink className="link" href="#">
                  Guru Randhawa
                </FooterLink>
                <FooterLink className="link" href="#">
                  Badshah
                </FooterLink>
                <FooterLink className="link" href="#">
                  MC Stan
                </FooterLink>
                <FooterLink className="link" href="#">
                  Mohit Chauhan
                </FooterLink>
                <FooterLink className="link" href="">
                  <span className="text-[#FF0000]"> View all </span>
                </FooterLink>
              </Box>
            </Box>
            <Box>
              <Box className="py-2">
                <span>New Release</span>
              </Box>
              <Box className="flex flex-col gap-y-2">
                <FooterLink className="link" href="#">
                  New English Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  New Hindi Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  New Punjabi Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  New Tamil Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  New Telugu Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  New Kannada Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  New Bhojpuri Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  New Malayalam Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  New Marathi Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  New Bengali Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  New Odia Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  New Urdu Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  New Gujarati Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  New Rajasthani Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  New Haryanvi Songs
                </FooterLink>
                <FooterLink className="link" href="">
                  <span className="text-[#FF0000]"> View all </span>
                </FooterLink>
              </Box>
            </Box>
          </Box>
          <Box className="flex justify-evenly pb-4">
            <Box>
              <Box className="py-2">
                <span>Trending Songs</span>
              </Box>
              <Box className="flex flex-col gap-y-2">
                <FooterLink className="link" href="#">
                  Vibe Song
                </FooterLink>
                <FooterLink className="link" href="#">
                  Udd Jaa Kaale Kaava
                </FooterLink>
                <FooterLink className="link" href="#">
                  Manike Mage Hithe
                </FooterLink>
                <FooterLink className="link" href="#">
                  Tilasmi Bahein
                </FooterLink>
                <FooterLink className="link" href="#">
                  Choli Ke Peeche
                </FooterLink>
                <FooterLink className="link" href="#">
                  Leke Prabhu Ka Naam
                </FooterLink>
                <FooterLink className="link" href="#">
                  Tu Mil Gaya
                </FooterLink>
                <FooterLink className="link" href="#">
                  Laa Pila De Sharaab
                </FooterLink>
                <FooterLink className="link" href="#">
                  Solmate
                </FooterLink>
                <FooterLink className="link" href="#">
                  Jalebi Baby
                </FooterLink>
                <FooterLink className="link" href="#">
                  Ruaan (From "Tiger 3")
                </FooterLink>
                <FooterLink className="link" href="#">
                  Baarish Ki Jaaye
                </FooterLink>
                <FooterLink className="link" href="">
                  <span className="text-[#FF0000]"> View all </span>
                </FooterLink>
              </Box>
            </Box>
            <Box>
              <Box className="py-2">
                <span>Trending Albums</span>
              </Box>
              <Box className="flex flex-col gap-y-2">
                <FooterLink className="link" href="#">
                  Sad Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  Bunty Aut Babli 2
                </FooterLink>
                <FooterLink className="link" href="#">
                  Pushpa 2 The Rule
                </FooterLink>
                <FooterLink className="link" href="#">
                  Animal
                </FooterLink>
                <FooterLink className="link" href="#">
                  Shape Of You
                </FooterLink>
                <FooterLink className="link" href="#">
                  SherShaah
                </FooterLink>
                <FooterLink className="link" href="#">
                  Amar Singh Chamkila
                </FooterLink>
                <FooterLink className="link" href="#">
                  Maidaan
                </FooterLink>
                <FooterLink className="link" href="#">
                  Dunki
                </FooterLink>
                <FooterLink className="link" href="#">
                  Dhamaka
                </FooterLink>
                <FooterLink className="link" href="#">
                  Fighter
                </FooterLink>
                <FooterLink className="link" href="#">
                  <span className="text-[#FF0000]"> View all </span>
                </FooterLink>
              </Box>
            </Box>
            <Box >
              <Box className="py-2">
                <span>Lyrics</span>
              </Box>
              <Box className="flex flex-col gap-y-2">
                <FooterLink className="link" href="#">
                  Gayatri Mantra
                </FooterLink>
                <FooterLink className="link" href="#">
                  Vande Mataram Lyrics
                </FooterLink>
                <FooterLink className="link" href="#">
                  Sukhkarta Dukhharta Lyrics
                </FooterLink>
                <FooterLink className="link" href="#">
                  Durga Maa Bhajan Lyrics
                </FooterLink>
                <FooterLink className="link" href="#">
                  Durga Chalisa Lyrics
                </FooterLink>
                <FooterLink className="link" href="#">
                  Jana Gana Mana Lyrics
                </FooterLink>
                <FooterLink className="link" href="#">
                  Navratri Song Lyrics
                </FooterLink>
                <FooterLink className="link" href="#">
                  Garba Song Lyrics
                </FooterLink>
                <FooterLink className="link" href="#">
                  Ambe Maa Aarti Lyrics
                </FooterLink>
                <FooterLink className="link" href="#">
                  <span className="text-[#FF0000]"> View all </span>
                </FooterLink>
              </Box>
            </Box>
            <Box >
              <Box className="py-2">
                <span>Old Songs</span>
              </Box>
              <Box className="flex flex-col gap-y-2">
                <FooterLink className="link" href="#">
                  Old Hindi Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  Old English Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  Old Punjabi Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  Old Telugu Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  Old Tamil Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  Old Bhojpuri Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  Old Bengali Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  Old Malayalam Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  Old Kannada Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  Old Marathi Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  Old Gujarati Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  Old Haryanvi Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  Old Urdu Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  Old Assamese Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  Old Rajasthani Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  <span className="text-[#FF0000]"> View all </span>
                </FooterLink>
              </Box>
            </Box>
          </Box>
          <Box className="flex justify-evenly pb-4">
            <Box >
              <Box className="py-2">
                <span>Podcasts</span>
              </Box>
              <Box className="flex flex-col gap-y-2">
                <FooterLink className="link" href="#">
                  RJ Kartik Motivation
                </FooterLink>
                <FooterLink className="link" href="#">
                  Choti Si Kahani
                </FooterLink>
                <FooterLink className="link" href="#">
                  The Robin Sharma Mastery
                </FooterLink>
                <FooterLink className="link" href="#">
                  Purpose With Gaur Gopal Das
                </FooterLink>
                <FooterLink className="link" href="#">
                  Story Podcasts
                </FooterLink>
                <FooterLink className="link" href="#">
                  Life Ki Rann Neeti
                </FooterLink>
                <FooterLink className="link" href="#">
                  Motivation Podcasts
                </FooterLink>
                <FooterLink className="link" href="#">
                  Raavn
                </FooterLink>
                <FooterLink className="link" href="#">
                  Ummeed With Zakir
                </FooterLink>
                <FooterLink className="link" href="#">
                  MD Motivation
                </FooterLink>
                <FooterLink className="link" href="#">
                  <span className="text-[#FF0000]"> View all </span>
                </FooterLink>
              </Box>
            </Box>

            <Box >
              <Box className="py-2">
                <span>Gaana Hits</span>
              </Box>
              <Box className="flex flex-col gap-y-2">
                <FooterLink className="link" href="#">
                  T-Series Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  Coachella 2024
                </FooterLink>
                <FooterLink className="link" href="#">
                  Bollywood Wedding Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  Bollywood Mashups Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  Motivation Podcasts
                </FooterLink>
                <FooterLink className="link" href="#">
                  Happy Birthday Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  Ummeed With Zakir
                </FooterLink>
                <FooterLink className="link" href="#">
                  Top 50 Hindi Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  <span className="text-[#FF0000]"> View all </span>
                </FooterLink>
              </Box>
            </Box>

            <Box >
              <Box className="py-2">
                <span>Latest Songs</span>
              </Box>
              <Box className="flex flex-col gap-y-2">
                <FooterLink className="link" href="#">
                  Naina
                </FooterLink>
                <FooterLink className="link" href="#">
                  Kalla Sohna Nai
                </FooterLink>
                <FooterLink className="link" href="#">
                  One Hai Re Bhai
                </FooterLink>
                <FooterLink className="link" href="#">
                  Mirza
                </FooterLink>
                <FooterLink className="link" href="#">
                  Meri Odhe Naal
                </FooterLink>
                <FooterLink className="link" href="#">
                  Dheeme Dheeme
                </FooterLink>
                <FooterLink className="link" href="#">
                  Hawa Banke
                </FooterLink>
                <FooterLink className="link" href="#">
                  Nain Tere
                </FooterLink>
                <FooterLink className="link" href="#">
                  8 Parche
                </FooterLink>
                <FooterLink className="link" href="#">
                  <span className="text-[#FF0000]"> View all </span>
                </FooterLink>
              </Box>
            </Box>

            <Box >
              <Box className="py-2">
                <span>Devotional Songs</span>
              </Box>
              <Box className="flex flex-col gap-y-2">
                <FooterLink className="link" href="#">
                  Hanuman Chalisa
                </FooterLink>
                <FooterLink className="link" href="#">
                  Maa Ka Bulawa Aaya Hai
                </FooterLink>
                <FooterLink className="link" href="#">
                  Ram Bhajans
                </FooterLink>
                <FooterLink className="link" href="#">
                  Bhajan Gold Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  Vhakti Songs
                </FooterLink>
                <FooterLink className="link" href="#">
                  <span className="text-[#FF0000]"> View all </span>
                </FooterLink>
              </Box>
            </Box>
          </Box>
        </Box>
        <hr />
        <Box className="flex justify-center text-xs text-[#C0C0C0] pt-2 pb-[10%]">
          <p>© Entertainment Network India Ltd. 2024, All Rights Reserved</p>
        </Box>
      </Box>
    </>
  );
}
export default Footer;
