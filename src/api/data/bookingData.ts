const bookingData = [
    {
        "bookingId": 5000,
        "customerName": "Dustin Wyatt",
        "startDate": "11/16/2020 12:00 AM",
        "endDate": "01/05/2021 10:00 PM",
        "status": "paired",
        "category": "Mid SUV",
        "confirmation": "J8MW6V3AS",
        "listingId": 1000
    },
    {
        "bookingId": 5001,
        "customerName": "Henry Cain",
        "startDate": "12/13/2020 04:00 AM",
        "endDate": "01/03/2021 04:00 PM",
        "status": "upcoming",
        "category": "Large SUV",
        "confirmation": "N6CN2R3LN",
        "listingId": null
    },
    {
        "bookingId": 5002,
        "customerName": "Marsden Holcomb",
        "startDate": "11/22/2020 02:00 AM",
        "endDate": "01/06/2021 01:00 PM",
        "status": "paired",
        "category": "Standard",
        "confirmation": "D8YF3G7MB",
        "listingId": 1001
    },
    {
        "bookingId": 5003,
        "customerName": "Hannah Whitfield",
        "startDate": "12/01/2020 08:00 AM",
        "endDate": "01/12/2021 10:00 AM",
        "status": "upcoming",
        "category": "Standard",
        "confirmation": "Q2BU6J6IW",
        "listingId": null
    },
    {
        "bookingId": 5004,
        "customerName": "Jillian Pacheco",
        "startDate": "11/22/2020 11:00 PM",
        "endDate": "01/05/2021 01:00 AM",
        "status": "paired",
        "category": "Van",
        "confirmation": "O9ZG4W7AT",
        "listingId": 1008
    },
    {
        "bookingId": 5005,
        "customerName": "Kellie Cote",
        "startDate": "12/31/2020 08:00 PM",
        "endDate": "01/07/2021 08:00 PM",
        "status": "paired",
        "category": "Mid SUV",
        "confirmation": "U5WM2F9LL",
        "listingId": 1013
    },
    {
        "bookingId": 5006,
        "customerName": "Byron Howell",
        "startDate": "12/09/2020 12:00 PM",
        "endDate": "01/08/2021 03:00 AM",
        "status": "complete",
        "category": "Van",
        "confirmation": "M9ZV2T8JU",
        "listingId": null
    },
    {
        "bookingId": 5007,
        "customerName": "Timothy Wong",
        "startDate": "11/24/2020 04:00 AM",
        "endDate": "01/01/2021 10:00 PM",
        "status": "paired",
        "category": "Large SUV",
        "confirmation": "I4GH2N2EE",
        "listingId": 1005
    },
    {
        "bookingId": 5008,
        "customerName": "Urielle James",
        "startDate": "12/07/2020 12:00 PM",
        "endDate": "01/01/2021 09:00 AM",
        "status": "complete",
        "category": "Van",
        "confirmation": "R6BY3Y4NQ",
        "listingId": null
    },
    {
        "bookingId": 5009,
        "customerName": "Slade Camacho",
        "startDate": "12/22/2020 05:00 AM",
        "endDate": "01/14/2021 05:00 PM",
        "status": "upcoming",
        "category": "Standard",
        "confirmation": "E1AO1G1IK",
        "listingId": null
    },
    {
        "bookingId": 5010,
        "customerName": "Nayda Bryan",
        "startDate": "12/17/2020 06:00 PM",
        "endDate": "01/15/2021 04:00 AM",
        "status": "complete",
        "category": "Van",
        "confirmation": "K4HW4T8KO",
        "listingId": null
    },
    {
        "bookingId": 5011,
        "customerName": "Jerry Christensen",
        "startDate": "12/14/2020 11:00 PM",
        "endDate": "01/15/2021 12:00 PM",
        "status": "upcoming",
        "category": "Mid SUV",
        "confirmation": "E4VO2I5QU",
        "listingId": null
    },
    {
        "bookingId": 5012,
        "customerName": "Kasimir Potter",
        "startDate": "11/18/2020 06:00 PM",
        "endDate": "01/12/2021 05:00 PM",
        "status": "upcoming",
        "category": "Van",
        "confirmation": "G9CJ1P3PE",
        "listingId": null
    },
    {
        "bookingId": 5013,
        "customerName": "Hope Mclean",
        "startDate": "11/19/2020 05:00 PM",
        "endDate": "01/09/2021 06:00 PM",
        "status": "paired",
        "category": "Mid SUV",
        "confirmation": "D7UT4E3RW",
        "listingId": 1024
    },
    {
        "bookingId": 5014,
        "customerName": "Ross Rush",
        "startDate": "12/04/2020 06:00 PM",
        "endDate": "01/13/2021 12:00 AM",
        "status": "paired",
        "category": "Large SUV",
        "confirmation": "B6RL2T3BI",
        "listingId": 1010
    },
    {
        "bookingId": 5015,
        "customerName": "Salvador James",
        "startDate": "11/23/2020 10:00 PM",
        "endDate": "01/02/2021 06:00 AM",
        "status": "upcoming",
        "category": "Large SUV",
        "confirmation": "F2QT6H4DO",
        "listingId": null
    },
    {
        "bookingId": 5016,
        "customerName": "Ferdinand Ewing",
        "startDate": "12/22/2020 02:00 PM",
        "endDate": "01/01/2021 11:00 AM",
        "status": "complete",
        "category": "Large SUV",
        "confirmation": "F5XS2Y1EU",
        "listingId": null
    },
    {
        "bookingId": 5017,
        "customerName": "Jelani Callahan",
        "startDate": "12/20/2020 11:00 AM",
        "endDate": "01/15/2021 05:00 PM",
        "status": "complete",
        "category": "Large SUV",
        "confirmation": "R6CJ2Q8BI",
        "listingId": null
    },
    {
        "bookingId": 5018,
        "customerName": "Nell Avery",
        "startDate": "12/28/2020 11:00 PM",
        "endDate": "01/14/2021 05:00 AM",
        "status": "complete",
        "category": "Mid SUV",
        "confirmation": "N3MA4L8IG",
        "listingId": null
    },
    {
        "bookingId": 5019,
        "customerName": "Wade Reynolds",
        "startDate": "11/18/2020 07:00 PM",
        "endDate": "01/05/2021 11:00 PM",
        "status": "upcoming",
        "category": "Mid SUV",
        "confirmation": "U8LQ6F6SW",
        "listingId": null
    },
    {
        "bookingId": 5020,
        "customerName": "Jael Fox",
        "startDate": "12/25/2020 08:00 AM",
        "endDate": "01/07/2021 06:00 PM",
        "status": "upcoming",
        "category": "Mid SUV",
        "confirmation": "L2OF1Z6YG",
        "listingId": null
    },
    {
        "bookingId": 5021,
        "customerName": "Cadman Pennington",
        "startDate": "12/02/2020 05:00 AM",
        "endDate": "01/14/2021 05:00 AM",
        "status": "paired",
        "category": "Mid SUV",
        "confirmation": "E8NH3J4BZ",
        "listingId": 1048
    },
    {
        "bookingId": 5022,
        "customerName": "Jasper Lopez",
        "startDate": "11/18/2020 03:00 PM",
        "endDate": "01/05/2021 04:00 PM",
        "status": "upcoming",
        "category": "Standard",
        "confirmation": "Q5QR4I2RC",
        "listingId": null
    },
    {
        "bookingId": 5023,
        "customerName": "Karleigh Skinner",
        "startDate": "01/01/2021 12:00 AM",
        "endDate": "01/13/2021 05:00 PM",
        "status": "upcoming",
        "category": "Mid SUV",
        "confirmation": "D1ED9M9DJ",
        "listingId": null
    },
    {
        "bookingId": 5024,
        "customerName": "Walker Mcbride",
        "startDate": "12/06/2020 12:00 AM",
        "endDate": "01/09/2021 05:00 AM",
        "status": "complete",
        "category": "Standard",
        "confirmation": "N6NB2E5ZH",
        "listingId": null
    },
    {
        "bookingId": 5025,
        "customerName": "Guy Rollins",
        "startDate": "01/01/2021 10:00 AM",
        "endDate": "01/09/2021 11:00 PM",
        "status": "complete",
        "category": "Van",
        "confirmation": "V1KA8T1ED",
        "listingId": null
    },
    {
        "bookingId": 5026,
        "customerName": "Castor Hopper",
        "startDate": "12/25/2020 06:00 AM",
        "endDate": "01/11/2021 12:00 PM",
        "status": "complete",
        "category": "Van",
        "confirmation": "W8EM2U2EJ",
        "listingId": null
    },
    {
        "bookingId": 5027,
        "customerName": "Carly Pittman",
        "startDate": "12/26/2020 03:00 AM",
        "endDate": "01/03/2021 03:00 PM",
        "status": "complete",
        "category": "Large SUV",
        "confirmation": "E7MZ5I4LH",
        "listingId": null
    },
    {
        "bookingId": 5028,
        "customerName": "Sawyer Vazquez",
        "startDate": "12/13/2020 11:00 AM",
        "endDate": "01/06/2021 04:00 AM",
        "status": "paired",
        "category": "Standard",
        "confirmation": "X8UL5G3ZE",
        "listingId": 1015
    },
    {
        "bookingId": 5029,
        "customerName": "Todd Cantu",
        "startDate": "11/26/2020 07:00 PM",
        "endDate": "01/10/2021 12:00 AM",
        "status": "complete",
        "category": "Large SUV",
        "confirmation": "C6AT4Q9QW",
        "listingId": null
    }
]

export { bookingData }
