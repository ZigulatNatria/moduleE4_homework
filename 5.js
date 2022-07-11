class Device {
    constructor(amper, volt, cost){
        this.amper = amper;
        this.volt = volt;
        this.cost = cost;
        this.onOff = false
    }
    getPrice(){
        return(`Стоимость ${this.cost}`)
    }
    getElectric(){
        let electric = this.amper * this.volt;
        return(`Потребляемая электроэнергия равна ${electric} кВт/ч`)
    }


    getOn(){
        this.onOff = true
        return(`Статус подключения устройства к сети ${this.onOff}`)
    }

    getOff(){
        this.onOff = false
        return(`Статус подключения устройства к сети ${this.onOff}`)
    }
}

class Guitar extends Device {
    constructor(name, volume, amper, volt, cost) {
        super(amper, volt, cost);
        this.name = name;
        this.volume = volume
    }

    getInfo(){
        console.log(`Гитара ${this.name} ${super.getPrice()}$`)

        if(this.volume < 1){
            return(`Текущий уровень громкости ${this.volume} это очень тихо`)
        }
        else {
            return(`Текущий уровень громкости ${this.volume} соседи оценили )))))))`)
        }
    }
}

class Computer extends Device {
    constructor(processor, ram, hardDrive, videoCard, amper, volt, cost) {
        super(amper, volt, cost);
        this.processor = processor;
        this.ram = ram;
        this.hardDrive = hardDrive;
        this.videoCard = videoCard;
    }

    getInfo(){
        return(`Системный блок:\n ${this.processor}\nОперативная память ${this.ram}Mb\nОбъём жёсткого диска ${this.hardDrive}T\nВидеокарта ${this.videoCard}\n${super.getPrice()}`)

    }
}




const guitar1 = new Guitar('Gibson', 1000, 100, 10, 1000);
const comp1 = new Computer('IntelCor I7', '8000', '10', 'GeForce GTX760', 70, 20, 500);
console.log(guitar1.getInfo())
console.log(guitar1.getOn())
console.log(guitar1.getOff())
console.log(guitar1.getElectric())
console.log('*******************************************************************************************************')
console.log(comp1.getInfo())
console.log(comp1.getOn())
console.log(comp1.getOff())
console.log(comp1.getElectric())