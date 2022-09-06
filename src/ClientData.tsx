import CStar from './cstarr.png'
import Star from './star.png'
import FoodOne from './food-1.png'
import FoodTwo from './food-2.png'
import FoodThree from './food-3.png'
import FoodFour from './food-4.png'



export interface clients {
    id:number,
    clientName:string,
    clientAddress: string,
    rating:number,
    ratingImageOne:string[],
    ratingImageTwo:string[],
    ratingBracket:number,
    openHours:string,
    options:options[],
    foodImg:string[],
    imgClass:string,
    update:string,
    openTimes:string,
    website:string,
    phoneNumber:number
}

export interface options{
    dine:string,
    takeAway:string,
    delivery:string
}

export const clientData:clients[] = [
    {
        id:1,
        clientName: "Lesukaa Restaurant (Catering Service & Food Delivery)",
        clientAddress: "Restaurant  Plot 337 Peter Odili Road Abuloma",
        rating: 4.1,
        ratingImageOne: [CStar],
        ratingImageTwo: [Star],
        ratingBracket:39,
        openHours:"Open 24 Hours",
        options:[{
            dine: 'Dine-in',
            takeAway: 'Takeaway',
            delivery: 'Delivery'

        }],
        foodImg:[FoodOne],
        imgClass:"firstImg",
        update:'Updated by business 2 weeks ago',
        openTimes:"Open now: 8:00am - 9pm",
        website:'https://www.lesukaa.com',
        phoneNumber:123456789


    },

    {
        id:2,
        clientName: "Dominos Pizza Peter Odili, Port Harcourt",
        clientAddress: "Plot 330 A/C Peter Odili Road, Port Harcourt, Rivers State",
        rating: 4.3,
        ratingImageOne: [CStar],
        ratingImageTwo: [Star],
        ratingBracket:221,
        openHours:"Open until 22:00",
        options:[{
            dine: 'Dine-in',
            takeAway: 'Curbside pickup',
            delivery: 'No-contact delivery'

        }],
        foodImg:[FoodTwo],
        imgClass:"secondImg",
        update:'Updated by business 1 week ago',
        openTimes:"Open now: 7:00am - 7pm",
        website:'https://www.dominos.com',
        phoneNumber:2236578617


    },

    {
        id:3,
        clientName: "Chicken Republic - Doxa Road",
        clientAddress: "",
        rating: 4.6,
        ratingImageOne: [CStar],
        ratingImageTwo: [Star],
        ratingBracket:13,
        openHours:"Open 24 Hours",
        options:[{
            dine: 'Dine-in',
            takeAway: 'Takeaway',
            delivery: 'Delivery'

        }],
        foodImg:[FoodThree],
        imgClass:"thirdImg",
        update:'Updated by business 2 days ago',
        openTimes:"Open now: 9:00am - 9pm",
        website:'https://www.chickenrepublic.com',
        phoneNumber:4346768926


    },

    {
        id:4,
        clientName: "Country Creamery",
        clientAddress: "Pizza 8 Okuru Abuloma Link Road Phalga",
        rating: 4.4,
        ratingImageOne: [CStar],
        ratingImageTwo: [Star],
        ratingBracket:23,
        openHours:"Open until 22:00",
        options:[{
            dine: 'Dine-in',
            takeAway: 'Takeaway',
            delivery: 'Delivery'

        }],
        foodImg:[FoodFour],
        imgClass:"fourthImg",
        update:'Updated by business 2 weeks ago',
        openTimes:"Open now: 7:00am - 7pm",
        website:'https://www.country.com',
        phoneNumber:3452762772


    }
]