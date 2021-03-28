https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript

    function well(x){
        let a = x.filter(el => el === 'good').length;
        return !a ? "Fail!" : a <= 2 ? "Publish!" : "I smell a series!";
    }