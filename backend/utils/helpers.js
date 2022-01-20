//compares the two dates.
exports.compareDate=(date1,date2)=>{
  
    if(date1.getTime()<date2.getTime()){
        return true
    }else return false

}