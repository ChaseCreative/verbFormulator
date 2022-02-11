
class Verb {
  constructor(first, second, third, fourth, verb, verbing, verbed,ppVerb){
  this.first = first;
  this.second = second;
  this.third = third;
  this.fourth = fourth;
  this.verb = verb;
  this.verbing = verbing;
  this.verbed = verbed;
  this.ppVerb = ppVerb;
  }

  //PRESENT ACTIVE INFINITIVE

  get actInfPres(){
    return this.presActInf();
  }

  presActInf(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "āre";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second;
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second;
    } else if (this.second.slice(-3,) == "ere"){
      return this.second;
    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "īre";
    }
  }

  get actInfPresTrans(){
    return this.presActInfTrans();
  }

  presActInfTrans(){
    return " to " +  this.verb;
  }

  //SINGULAR IMPERATIVE

  get imperativeSing(){
    return this.singImperative();
  }

  singImperative(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "ā";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ē";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      if (this.second == "facere"){
        return "fac";
      } else {
      return this.second.slice(0,-3) + "e";
      }
    } else if (this.second.slice(-3,) == "ere"){
        if (this.second == "ducere"){
          return "duc";
        } else if (this.second == "dicere"){
          return "dic";
        } else {
          return this.second.slice(0,-3) + "e";
        }
    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "ī";
    }
  }

  get imperativeSingTrans(){
    let imperative = this.verb;
    return imperative[0].toUpperCase() + imperative.substring(1) +  "!";
  }



  //PLURAL IMPERATIVE

  get imperativePl(){
    return this.plImperative();
  }

  plImperative(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "āte";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ēte";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "ite";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "ite";
    } else if(this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "īte";
    }
  }

  get imperativePlTrans(){
    let imperative = this.verb;
    return imperative[0].toUpperCase() + imperative.substring(1) +  ", ya'll!";
  }

  plImperativeTrans(){
    return this.imperativePlTrans();
  }




  //PRESENT TENSE
  get firstSingPres(){
    return this.presFirstSing();
  }

  presFirstSing(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "ō";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "eō";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "iō";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "ō";

    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "iō";
    }
  }



  get firstSingPresTrans(){
    return this.presFirstSingTrans();
  }

  presFirstSingTrans(){
    return "I " +  this.verb;
  }

  get secondSingPres(){
    return this.presSecondSing();
  }

  presSecondSing(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "ās";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ēs";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "is";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "is";

    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "īs";
    }
  }

  get secondSingPresTrans(){
    return this.presSecondSingTrans();
  }

  presSecondSingTrans(){
    return "you " +  this.verb;
  }

  get thirdSingPres(){
    return this.presThirdSing();
  }

  presThirdSing(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "at";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "et";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "it";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "it";

    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "it";
    }
  }

  get thirdSingPresTrans(){
    return this.presThirdSingTrans();
  }

  presThirdSingTrans(){
    return "he " +  this.verb + "s";
  }

  get firstPlPres(){
    return this.presFirstPl();
  }

  presFirstPl(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "āmus";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ēmus";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "imus";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "imus";

    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "īmus";
    }
  }

  get firstPlPresTrans(){
    return this.presFirstPlTrans();
  }

  presFirstPlTrans(){
    return "we " +  this.verb;
  }

  get secondPlPres(){
    return this.presSecondPl();
  }

  presSecondPl(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "ātis";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ētis";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "itis";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "itis";

    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "ītis";
    }
  }

  get secondPlPresTrans(){
    return this.presSecondPlTrans();
  }

  presSecondPlTrans(){
    return "y'all " +  this.verb;
  }


  get thirdPlPres(){
    return this.presThirdPl();
  }

  presThirdPl(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "ant";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ent";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "iunt";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "unt";

    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "īunt";
    }
  }

  get thirdPlPresTrans(){
    return this.presThirdPlTrans();
  }

  presThirdPlTrans(){
    return "they " +  this.verb;
  }

//imperfect

  get firstSingImp(){
   return this.impFirstSing();
 }

  impFirstSing(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "ābam";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ēbam";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "iēbam";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "ēbam";
    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "iēbam";
    }
  }



  get firstSingImpTrans(){
    return this.impFirstSingTrans();
  }

  impFirstSingTrans(){
    return "I was " +  this.verbing;
  }

  get secondSingImp(){
    return this.impSecondSing();
  }

  impSecondSing(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "ābās";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ēbās";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "iēbās";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "ēbās";
    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "iēbās";
    }
  }

  get secondSingImpTrans(){
    return this.impSecondSingTrans();
  }

  impSecondSingTrans(){
    return "you were " +  this.verbing;
  }

  get thirdSingImp(){
    return this.impThirdSing();
  }

  impThirdSing(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "abat";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ēbat";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "iēbat";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "ēbat";
    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "iēbat";
    }
  }

  get thirdSingImpTrans(){
    return this.impThirdSingTrans();
  }

  impThirdSingTrans(){
    return "he was " +  this.verbing;
  }

  get firstPlImp(){
    return this.impFirstPl();
  }

  impFirstPl(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "ābāmus";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ēbāmus";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "iēbāmus";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "ēbāmus";

    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "iēbāmus";
    }
  }

  get firstPlImpTrans(){
    return this.impFirstPlTrans();
  }

  impFirstPlTrans(){
    return "we were " +  this.verbing;
  }

  get secondPlImp(){
    return this.impSecondPl();
  }

  impSecondPl(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "ābātis";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ēbātis";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "iēbātis";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "ēbātis";
    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "iēbātis";
    }
  }

  get secondPlImpTrans(){
    return this.impSecondPlTrans();
  }

  impSecondPlTrans(){
    return "y'all were " +  this.verbing;
  }


  get thirdPlImp(){
    return this.impThirdPl();
  }

  impThirdPl(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "abant";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ēbant";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "iēbant";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "ēbant";
    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "iēbant";
    }
  }

  get thirdPlImpTrans(){
    return this.impThirdPlTrans();
  }

  impThirdPlTrans(){
    return "they were " +  this.verbing;
  }

  //future tense

    get firstSingFut(){
     return this.futFirstSing();
   }

    futFirstSing(){
      if (this.second.slice(-3,) == "are"){
        return this.second.slice(0,-3) + "ābō";
      } else if (this.second.slice(-3,) == "ēre"){
        return this.second.slice(0,-3) + "ēbō";
      } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "iam";
      } else if (this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "am";
      } else if (this.second.slice(-3,) == "ire"){
        return this.second.slice(0,-3) + "iam";
      }
    }



    get firstSingFutTrans(){
      return this.futFirstSingTrans();
    }

    futFirstSingTrans(){
      return "I will " +  this.verb;
    }

    get secondSingFut(){
      return this.futSecondSing();
    }

    futSecondSing(){
      if (this.second.slice(-3,) == "are"){
        return this.second.slice(0,-3) + "ābis";
      } else if (this.second.slice(-3,) == "ēre"){
        return this.second.slice(0,-3) + "ēbis";
      } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "iēs";
      } else if (this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "ēs";
      } else if (this.second.slice(-3,) == "ire"){
        return this.second.slice(0,-3) + "iēs";
      }
    }

    get secondSingFutTrans(){
      return this.futSecondSingTrans();
    }

    futSecondSingTrans(){
      return "you will " +  this.verb;
    }

    get thirdSingFut(){
      return this.futThirdSing();
    }

    futThirdSing(){
      if (this.second.slice(-3,) == "are"){
        return this.second.slice(0,-3) + "ābit";
      } else if (this.second.slice(-3,) == "ēre"){
        return this.second.slice(0,-3) + "ēbit";
      } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "iet";
      } else if (this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "et";
      } else if (this.second.slice(-3,) == "ire"){
        return this.second.slice(0,-3) + "iet";
      }
    }

    get thirdSingFutTrans(){
      return this.futThirdSingTrans();
    }

    futThirdSingTrans(){
      return "he will " +  this.verb;
    }

    get firstPlFut(){
      return this.futFirstPl();
    }

    futFirstPl(){
      if (this.second.slice(-3,) == "are"){
        return this.second.slice(0,-3) + "ābimus";
      } else if (this.second.slice(-3,) == "ēre"){
        return this.second.slice(0,-3) + "ēbimus";
      } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "iēmus";
      } else if (this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "ēmus";

      } else if (this.second.slice(-3,) == "ire"){
        return this.second.slice(0,-3) + "iēmus";
      }
    }

    get firstPlFutTrans(){
      return this.futFirstPlTrans();
    }

    futFirstPlTrans(){
      return "we will " +  this.verb;
    }

    get secondPlFut(){
      return this.futSecondPl();
    }

    futSecondPl(){
      if (this.second.slice(-3,) == "are"){
        return this.second.slice(0,-3) + "ābitis";
      } else if (this.second.slice(-3,) == "ēre"){
        return this.second.slice(0,-3) + "ēbitis";
      } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "iētis";
      } else if (this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "ētis";
      } else if (this.second.slice(-3,) == "ire"){
        return this.second.slice(0,-3) + "iētis";
      }
    }

    get secondPlFutTrans(){
      return this.futSecondPlTrans();
    }

    futSecondPlTrans(){
      return "y'all will " +  this.verb;
    }


    get thirdPlFut(){
      return this.futThirdPl();
    }

    futThirdPl(){
      if (this.second.slice(-3,) == "are"){
        return this.second.slice(0,-3) + "ābunt";
      } else if (this.second.slice(-3,) == "ēre"){
        return this.second.slice(0,-3) + "ēbunt";
      } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "ient";
      } else if (this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "ent";
      } else if (this.second.slice(-3,) == "ire"){
        return this.second.slice(0,-3) + "ient";
      }
    }

    get thirdPlFutTrans(){
      return this.futThirdPlTrans();
    }

    futThirdPlTrans(){
      return "they will " +  this.verb;
    }

   //PERFECT tense

   get firstSingPer(){
    return this.perFirstSing();
  }

   perFirstSing(){
     return this.third.slice(0,-1) + "ī";
   }

   get firstSingPerTrans(){
     return this.perFirstSingTrans();
   }

   perFirstSingTrans(){
     return "I " +  this.verbed;
   }

   get secondSingPer(){
    return this.perSecondSing();
  }

   perSecondSing(){
     return this.third.slice(0,-1) + "istī";
   }

   get secondSingPerTrans(){
     return this.perSecondSingTrans();
   }

   perSecondSingTrans(){
     return "you " +  this.verbed;
   }

   get thirdSingPer(){
    return this.perThirdSing();
  }

   perThirdSing(){
     return this.third.slice(0,-1) + "it";
   }

   get thirdSingPerTrans(){
     return this.perThirdSingTrans();
   }

   perThirdSingTrans(){
     return "he " +  this.verbed;
   }

   get firstPlPer(){
    return this.perFirstPl();
  }

   perFirstPl(){
     return this.third.slice(0,-1) + "imus";
   }

   get firstPlPerTrans(){
     return this.perFirstPlTrans();
   }

   perFirstPlTrans(){
     return "we " +  this.verbed;
   }

   get secondPlPer(){
    return this.perSecondPl();
  }

   perSecondPl(){
     return this.third.slice(0,-1) + "istis";
   }

   get secondPlPerTrans(){
     return this.perSecondPlTrans();
   }

   perSecondPlTrans(){
     return "y'all " +  this.verbed;
   }

   get thirdPlPer(){
    return this.perThirdPl();
  }

   perThirdPl(){
     return this.third.slice(0,-1) + "ērunt";
   }

   get thirdPlPerTrans(){
     return this.perThirdPlTrans();
   }

   perThirdPlTrans(){
     return "they " +  this.verbed;
   }

   //PLUPERFECT getElementsByName

   get firstSingPlu(){
    return this.pluFirstSing();
  }

   pluFirstSing(){
     return this.third.slice(0,-1) + "eram";
   }

   get firstSingPluTrans(){
     return this.pluFirstSingTrans();
   }

   pluFirstSingTrans(){
     return "I had " +  this.ppVerb;
   }

   get secondSingPlu(){
    return this.pluSecondSing();
  }

   pluSecondSing(){
     return this.third.slice(0,-1) + "eras";
   }

   get secondSingPluTrans(){
     return this.pluSecondSingTrans();
   }

   pluSecondSingTrans(){
     return "you had " +  this.ppVerb;
   }

   get thirdSingPlu(){
    return this.pluThirdSing();
  }

   pluThirdSing(){
     return this.third.slice(0,-1) + "erat";
   }

   get thirdSingPluTrans(){
     return this.pluThirdSingTrans();
   }

   pluThirdSingTrans(){
     return "he had " +  this.ppVerb;
   }

   get firstPlPlu(){
    return this.pluFirstPl();
  }

   pluFirstPl(){
     return this.third.slice(0,-1) + "eramus";
   }

   get firstPlPluTrans(){
     return this.pluFirstPlTrans();
   }

   pluFirstPlTrans(){
     return "we had " +  this.ppVerb;
   }

   get secondPlPlu(){
    return this.pluSecondPl();
  }

   pluSecondPl(){
     return this.third.slice(0,-1) + "eratis";
   }

   get secondPlPluTrans(){
     return this.pluSecondPlTrans();
   }

   pluSecondPlTrans(){
     return "y'all had " +  this.ppVerb;
   }

   get thirdPlPlu(){
    return this.pluThirdPl();
  }

   pluThirdPl(){
     return this.third.slice(0,-1) + "erant";
   }

   get thirdPlPluTrans(){
     return this.pluThirdPlTrans();
   }

   pluThirdPlTrans(){
     return "they had " +  this.ppVerb;
   }

   //FUTURE PERFECT

   get firstSingFutPer(){
    return this.futPerFirstSing();
  }

   futPerFirstSing(){
     return this.third.slice(0,-1) + "ero";
   }

   get firstSingFutPerTrans(){
     return this.futPerFirstSingTrans();
   }

   futPerFirstSingTrans(){
     return "I will have " +  this.verbed;
   }

   get secondSingFutPer(){
    return this.futPerSecondSing();
  }

   futPerSecondSing(){
     return this.third.slice(0,-1) + "eris";
   }

   get secondSingFutPerTrans(){
     return this.futPerSecondSingTrans();
   }

   futPerSecondSingTrans(){
     return "you will have " +  this.ppVerb;
   }

   get thirdSingFutPer(){
    return this.futPerThirdSing();
  }

   futPerThirdSing(){
     return this.third.slice(0,-1) + "erit";
   }

   get thirdSingFutPerTrans(){
     return this.futPerThirdSingTrans();
   }

   futPerThirdSingTrans(){
     return "he will have " +  this.ppVerb;
   }

   get firstPlFutPer(){
    return this.futPerFirstPl();
  }

   futPerFirstPl(){
     return this.third.slice(0,-1) + "erimus";
   }

   get firstPlFutPerTrans(){
     return this.futPerFirstPlTrans();
   }

   futPerFirstPlTrans(){
     return "we will have " +  this.ppVerb;
   }

   get secondPlFutPer(){
    return this.futPerSecondPl();
  }

   futPerSecondPl(){
     return this.third.slice(0,-1) + "eritis";
   }

   get secondPlFutPerTrans(){
     return this.futPerSecondPlTrans();
   }

   futPerSecondPlTrans(){
     return "y'all will have " +  this.ppVerb;
   }

   get thirdPlFutPer(){
    return this.futPerThirdPl();
  }

   futPerThirdPl(){
     return this.third.slice(0,-1) + "erint";
   }

   get thirdPlFutPerTrans(){
     return this.futPerThirdPlTrans();
   }

   futPerThirdPlTrans(){
     return "they will have " +  this.ppVerb;
   }

}

var count = 0;
var score = 0;
var wordList = [];

var intro = "Please select a Latin verb from the below list:" + "<br>" + "amo" + "&emsp;" + "laudo" + "&emsp;" + "observo" + "&emsp;" + "moveo" + "<br>" + "moneo" + "&emsp;" + "terreo" + "&emsp;" + "video" + "&emsp;" + "duco" + "<br>" + "audio" + "&emsp;" + "voco" + "&emsp;" + "dormio" + "&emsp;" + "paro" + "<br>" + "venio" + "&emsp;" + "facio" + "&emsp;" + "mitto" + "&emsp;" + "habeo" + "&emsp;" + "habito" +"<br>" + "dico" + "&emsp;" + "do" + "&emsp;" + "sto" + "&emsp;" + "teneo" + "<br>" + "specto" + "&emsp;" + "frango" + "&emsp;" + "" + "&emsp;" + "" + "&emsp;" + "" + "<br>" + "" + "&emsp;" + "" + "&emsp;" + "" + "&emsp;" + "";


// let wordList = [["amo", "amare", "amavi","amatus", "love", "loving", "loved", "loved"],["laudo", "laudare", "laudavi","laudatus", "praise", "praising", "praised", "praised"],["observo", "observare", "observavi","observatus", "observe", "observing", "observed", "observed"],["paro", "parare", "paravi","paratus", "prepare", "preparing", "prepared", "prepared"],["moveo", "movēre", "movi","motus", "move", "moving", "moved", "moved"],["moneo", "monēre", "monui","monitus", "warn", "warning", "warned", "warned"],["terreo", "terrēre", "terrui","territus", "frighten", "frightening", "frightened", "frightened"],["duco", "ducere", "duxi","ductus", "lead", "leading", "led", "led"],["capio", "capere", "cepi","captus", "capture", "capturing", "captured", "captured"],["audio", "audire", "audivi","auditus", "hear", "hearing","heard","heard"],["dormio", "dormire", "dormivi","dormitus", "sleep", "sleeping","slept","slept"],["venio", "venire", "vēni","ventus", "come", "coming","came","come"],["voco", "vocare", "vocavi","vocatus", "call", "calling", "called", "called"],["video", "vidēre", "vīdi","visus", "see", "seeing", "saw", "seen"]];

document.getElementById("label").innerHTML = intro;

function userNounInput(){


  //the below block of code transforms the user's response into a lower case array
  var answer = document.getElementById("textBox").value.toLowerCase().replace(/[., ]+/g, " ").trim();
  console.log(answer);
  console.log(typeof answer);
  // //this regex removes periods, commas, and extra spaces
  // let trimmedAnswer = answer.replace(/[., ]+/g, " ").trim();
  // // //this splits the user's answer into an array
  // let nounArray = trimmedAnswer.split(" ");
  // console.log(nounArray);

  var wordList = [["amo", "amare", "amavi","amatus", "love", "loving", "loved", "loved"],["do", "dare", "dedi","datus", "give", "giving", "gave", "given"],["habito", "habitare", "habitavi","habitatus", "lived", "living", "lived", "lived"],["laudo", "laudare", "laudavi","laudatus", "praise", "praising", "praised", "praised"],["observo", "observare", "observavi","observatus", "observe", "observing", "observed", "observed"],["paro", "parare", "paravi","paratus", "prepare", "preparing", "prepared", "prepared"],["specto", "spectare", "spectavi","spectatus", "look at", "looking at", "lookd at", "looked at"],["sto", "stare", "steti","status", "stand", "standing", "stood", "stood"],["habeo", "habēre", "habui","habitus", "have", "having", "had", "had"],["moveo", "movēre", "movi","motus", "move", "moving", "moved", "moved"],["moneo", "monēre", "monui","monitus", "warn", "warning", "warned", "warned"],["teneo", "tenēre", "tenui","tentus", "hold", "holding", "held", "held"],["terreo", "terrēre", "terrui","territus", "frighten", "frightening", "frightened", "frightened"],["duco", "ducere", "duxi","ductus", "lead", "leading", "led", "led"],["frango", "frangere", "frēgi","fractus", "break", "breaking", "broke", "broken"],["mitto", "mittere", "mīsi","missus", "send", "sending", "sent", "sent"],["capio", "capere", "cēpi","captus", "capture", "capturing", "captured", "captured"],["dico", "dīcere", "dīxi","dictus", "say", "saying", "said", "said"],["facio", "facere", "fēci","factus", "make", "making", "made", "made"],["audio", "audire", "audivi","auditus", "hear", "hearing","heard","heard"],["dormio", "dormire", "dormivi","dormitus", "sleep", "sleeping","slept","slept"],["venio", "venire", "vēni","ventus", "come", "coming","came","come"],["voco", "vocare", "vocavi","vocatus", "call", "calling", "called", "called"],["video", "vidēre", "vīdi","visus", "see", "seeing", "saw", "seen"]];

  console.log(wordList[0][0]);
  console.log(typeof wordList[0][0]);



  for (let i = 0;i < wordList.length;i++){
    console.log(wordList[i][0]);
    // if (answer.replace(/[., ]+/g, " ").trim() == wordList[i][0].replace(/[., ]+/g, " ").trim()){
    if ((answer.normalize()) === (wordList[i][0].normalize())){

      verbArray = [wordList[i][0],wordList[i][1],wordList[i][2],wordList[i][3],wordList[i][4],wordList[i][5],wordList[i][6],wordList[i][7]];
      startGame();
      //document.getElementById("submit").onclick = function(){startGame()};
      //document.getElementById("textBox").value = " ";
      console.log(verbArray)

      return verbArray;
    } else {
      document.getElementById("label").innerHTML = intro;
      document.getElementById("submit").onclick = function(){userNounInput()};
      document.getElementById("textBox").value = " ";
    }
  }
}
  // console.log(answer);
  function startGame(){
    console.log("hi")
    console.log(verbArray)

    ranVerb = new Verb(verbArray[0],verbArray[1],verbArray[2],verbArray[3],verbArray[4],verbArray[5],verbArray[6],verbArray[7]);
    // rWLindx = Math.floor(Math.random() * nounArray.length);

    //this creates an array of the Latin verb and their translations
    // ranVerbForm = [[ranVerb.firstSingPres,ranVerb.firstSingPresTrans,"1st person singular present tense"],[ranVerb.secondSingPres,ranVerb.secondSingPresTrans,"2nd person singular present tense"],[ranVerb.thirdSingPres,ranVerb.thirdSingPresTrans,"3rd person singular present tense"],[ranVerb.firstPlPres,ranVerb.firstPlPresTrans,"1st person plural present tense"],[ranVerb.secondPlPres,ranVerb.secondPlPresTrans,"2nd person plural present tense"],[ranVerb.thirdPlPres,ranVerb.thirdPlPresTrans,"3rd person plural present tense"],[ranVerb.impFirstSing,ranVerb.firstSingImpTrans,"1st person singular imperfect tense"],[ranVerb.impSecondSing,ranVerb.secondSingImpTrans,"2nd person singular imperfect tense"],[ranVerb.impThirdSing,ranVerb.thirdSingImpTrans,"3rd person singular imperfect tense"],[ranVerb.impFirstPl,ranVerb.firstPlImpTrans,"1st person plural imperfect tense"],[ranVerb.impSecondPl,ranVerb.secondPlImpTrans,"2nd person plural imperfect tense"],[ranVerb.impThirdPl,ranVerb.thirdPlImpTrans,"3rd person plural imperfect tense"]];
    // console.log(ranVerbForm)
    // rVFindx = Math.floor(Math.random() * ranVerbForm.length);
    ranVerbForm = [[ranVerb.firstSingPres,ranVerb.firstSingPresTrans,"1st person singular present tense"],[ranVerb.secondSingPres,ranVerb.secondSingPresTrans,"2nd person singular present tense"],[ranVerb.thirdSingPres,ranVerb.thirdSingPresTrans,"3rd person singular present tense"],[ranVerb.firstPlPres,ranVerb.firstPlPresTrans,"1st person plural present tense"],[ranVerb.secondPlPres,ranVerb.secondPlPresTrans,"2nd person plural present tense"],[ranVerb.thirdPlPres,ranVerb.thirdPlPresTrans,"3rd person plural present tense"],[ranVerb.firstSingImp,ranVerb.firstSingImpTrans,"1st person singular imperfect tense"],[ranVerb.secondSingImp,ranVerb.secondSingImpTrans,"2nd person singular imperfect tense"],[ranVerb.thirdSingImp,ranVerb.thirdSingImpTrans,"3rd person singular imperfect tense"],[ranVerb.firstPlImp,ranVerb.firstPlImpTrans,"1st person plural imperfect tense"],[ranVerb.secondPlImp,ranVerb.secondPlImpTrans,"2nd person plural imperfect tense"],[ranVerb.thirdPlImp,ranVerb.thirdPlImpTrans,"3rd person plural imperfect tense"],[ranVerb.firstSingFut,ranVerb.firstSingFutTrans,"1st person singular future tense"],[ranVerb.secondSingFut,ranVerb.secondSingFutTrans,"2nd person singular future tense"],[ranVerb.thirdSingFut,ranVerb.thirdSingFutTrans,"3rd person singular future tense"],[ranVerb.firstPlFut,ranVerb.firstPlFutTrans,"1st person plural future tense"],[ranVerb.secondPlFut,ranVerb.secondPlFutTrans,"2nd person plural future tense"],[ranVerb.thirdPlFut,ranVerb.thirdPlFutTrans,"3rd person plural future tense"],[ranVerb.firstSingPer,ranVerb.firstSingPerTrans,"1st person singular perfect tense"],[ranVerb.secondSingPer,ranVerb.secondSingPerTrans,"2nd person singular perfect tense"],[ranVerb.thirdSingPer,ranVerb.thirdSingPerTrans,"3rd person singular perfect tense"],[ranVerb.firstPlPer,ranVerb.firstPlPerTrans,"1st person plural perfect tense"],[ranVerb.secondPlPer,ranVerb.secondPlPerTrans,"2nd person plural perfect tense"],[ranVerb.thirdPlPer,ranVerb.thirdPlPerTrans,"3rd person plural perfect tense"],[ranVerb.firstSingFutPer,ranVerb.firstSingFutPerTrans,"1st person singular future perfect tense"],[ranVerb.secondSingFutPer,ranVerb.secondSingFutPerTrans,"2nd person singular future perfect tense"],[ranVerb.thirdSingFutPer,ranVerb.thirdSingFutPerTrans,"3rd person singular future perfect tense"],[ranVerb.firstFutPlPer,ranVerb.firstPlFutPerTrans,"1st person plural future perfect tense"],[ranVerb.secondPlFutPer,ranVerb.secondPlFutPerTrans,"2nd person plural future perfect tense"],[ranVerb.thirdPlFutPer,ranVerb.thirdPlFutPerTrans,"3rd person plural future perfect tense"],[ranVerb.firstSingPlu,ranVerb.firstSingPluTrans,"1st person singular pluperfect tense"],[ranVerb.secondSingPlu,ranVerb.secondSingPluTrans,"2nd person singular pluperfect tense"],[ranVerb.thirdSingPlu,ranVerb.thirdSingPluTrans,"3rd person singular pluperfect tense"],[ranVerb.firstPlPlu,ranVerb.firstPlPluTrans,"1st person plural pluperfect tense"],[ranVerb.secondPlPlu,ranVerb.secondPlPluTrans,"2nd person plural pluperfect tense"],[ranVerb.thirdPlPlu,ranVerb.thirdPlPluTrans,"3rd person plural pluperfect tense"]];
    console.log(ranVerbForm)
    rVFindx = Math.floor(Math.random() * ranVerbForm.length);

    console.log(ranVerbForm.length);
    console.log(rVFindx);
    console.log(ranVerbForm[rVFindx]);

    document.getElementById("label").innerHTML = "Please translate \"" + ranVerbForm[rVFindx][1] + "!\" (N.B. " + ranVerb.firstSingPres + ", " + ranVerb.actInfPres + ", " + ranVerb.firstSingPer + ", " + ranVerb.actInfPresTrans + ")";
    document.getElementById("submit").onclick = function(){checkAnswer()};
    // document.getElementById("label2").style.display = "none";
    latinForm = ranVerbForm[rVFindx][0].normalize('NFKD').replace(/[\u0300-\u036f]/g, "");
    latinTrans = ranVerbForm[rVFindx][1].normalize('NFKD').replace(/[\u0300-\u036f]/g, "");
    document.getElementById("textBox").value = " ";
    console.log(latinForm)
    console.log(latinForm.trim().toUpperCase())
    console.log(latinTrans.toUpperCase())


    return [ranVerb, ranVerbForm,latinForm, latinTrans]

  }




  function checkAnswer(){

    answer = document.getElementById("textBox").value.toUpperCase();
    console.log(answer.trim())
    console.log(latinForm.trim())
    console.log(rVFindx);

    if (answer.trim() == latinForm.trim().toUpperCase()){
    // if (document.getElementById("textBox").value.toLowerCase() === latinForm.toLowerCase()){
      document.getElementById("label").innerHTML = "Nice! The correct translation of \"" + latinTrans.trim() + "\" was \"" + latinForm.trim() + ".\" Do you want to play again? (y/n)";
      score++;

    } else {
      document.getElementById("label").innerHTML = "Oops! You answered \"" + answer.trim() + ".\" The correct translation of \"" + latinTrans.trim() + "\" was \"" + latinForm.trim() + ".\" Do you want to play again? (y/n)";

    }
    document.getElementById("textBox").style.display = "block";
    document.getElementById("textBox").value = " ";
    document.getElementById("submit").onclick = function(){playAgain()};
    count++;
  }


  function playAgain(){

    answer = document.getElementById("textBox").value.toLowerCase().trim();
    console.log(answer.startsWith("y"));
    //document.getElementById("textbox2").style.display = "none";

    if (answer.startsWith("y")){
      document.getElementById("label").innerHTML = intro;

      // document.getElementById("label").innerHTML = "Give a Latin noun (e.g., puer, pueri, m., boy, boys): ";
      document.getElementById("submit").onclick = function(){userNounInput()};
      document.getElementById("textBox").style.display = "block";
      document.getElementById("textBox").value = " ";
    } else if (answer.startsWith("n")) {
      endGame();
      return false
    } else {
      document.getElementById("textBox").style.display = "none";
      document.getElementById("label").innerHTML = "Please answer either 'y' or 'n'!";
      document.getElementById("textBox").style.display = "block";
      document.getElementById("textBox").value = " ";
      document.getElementById("submit").onclick = function(){playAgain()};
    }
  }

  function endGame() {
    document.getElementById("textBox").style.display = "none";
    document.getElementById("label").innerHTML = "Vale! You scored " + score + " out of " + count + " attempts - " + Math.round(score/count*100) + "%";
    // document.getElementById("label").style.display = "none";
    document.getElementById("submit").style.display = "none";

  }
