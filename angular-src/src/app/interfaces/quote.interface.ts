export interface Quote {
    client: string;
    crew: Item[];
    equipments: Item[];
    productionTotal: string;

    stringOfVideos: string;
    averageLength: string;
    editStyle: string;
    compatibility: string;
    unitCost: string;
    postProductionTotal: string;

    total: string;
    quote: string;
}

export interface Item {
    type: string;
    category: string;
    unitCost: string;
    units: string;
    cost: string;
}
