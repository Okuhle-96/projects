function transportFee(shift){
    switch(shift) {
        case "morning":
            return "R20";
        
        case "afternoon":
            return "R10";
        
        case "nightshift":
            return "free";
        default:
            return "There is no train to " + route;
    }
}