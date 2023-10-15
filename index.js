class Formatter {
 
  //add static methods here
  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  static sanitize(str){
    return str.replace(/[^a-zA-Z' -]/g, '')
  }
  static titleize(str){
    let newstr= str.split(" ");
    let capitalize = newstr.map((word,index) => {
 if (word == "the" || word =="a" || word =="an" || word =="but" || word == "of" || word == "and" || word == "for" || word == "at"
 || word == "by" || word =="from"){
  if(index == 0){
    console.log(word);
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  else{

  }return word;
  

 }
 else {
  return word.charAt(0).toUpperCase() + word.slice(1);
 }
 

    });
    let joinCapitalize = capitalize.join(" ");
    return joinCapitalize;
}

}
