import profileImg from 'src/assets/profile.png';
export interface UpdatedText {
  name: string;
  role: string;
  profileImg: string;
  tagline: string;
  education: string;
}

const updatedText: UpdatedText = {
  //header info
  name:"Vinod De Silva",
  role:"Combined Maths Teacher",
  profileImg: profileImg,
  education:"BSc. UG, University of Sri Jayewardenepura",

  //footer info
  tagline:"A/L Combined Maths • Online & Physical Classes"
}
 


export default updatedText;