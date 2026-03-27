
    function now(){
    let today = new Date();
    return [today.getFullYear(),two(today.getMonth()+1),two(today.getDate())].join('-')+' '+[two(today.getHours()),two(today.getMinutes()),two(today.getSeconds())].join(':');

    }

    function two(num){
      if(num<10) return "0"+num; else return num;
      return (num<10)?"0"+num:num;
    }