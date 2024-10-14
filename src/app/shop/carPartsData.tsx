const goodsData = [
  {
    itemIndex: 1,
    itemDate: '10.10.2024',
    itemImg:
      'https://i.postimg.cc/0N3Q0mKg/edd76039-773c-4d0f-8672-6d08a3546fd4.jpg',
    itemName:
      'Ford Kuga 2.0 4WD Tdci Verteilergetriebe Getriebe Transfair case',
    itemDescription:
      'Verteilergetriebe (Funktioniert einwandfrei) von Ford Kuga mit 163PS 2.0 Tdci Allrad Titanium',
    itemMark: 'Ford',
    itemModel: 'Kuga',
    itemYear: '2010',
    itemPrise: 'VB',
  },
  {
    itemIndex: 2,
    itemDate: '10.10.2024',
    itemImg:
      'https://i.postimg.cc/CLFFDJrB/5d08c237-e3b8-4942-835a-1070946f8235.jpg',
    itemName: 'Ford Kuga Turbolader mit Ansasugbrücke',
    itemDescription:
      'Turbolader mit Ansaugbrücke von Ford Kuga mit 163PS 2.0 Tdci Allrad Titanium',
    itemMark: 'Ford',
    itemModel: 'Kuga',
    itemYear: '2010',
    itemPrise: '200',
  },
  {
    itemIndex: 3,
    itemImg:
      'https://i.postimg.cc/yxnW9GFj/d9468e3a-6191-4363-a8b8-54f8c070b582.jpg',
    itemName: 'VW Golf 5 Türverkleidung rechts',
    itemDescription:
      'Türverkleidung rechts Beifahrer Spenderfahrzeug: Vw Golf 5. 3Türen',
    itemMark: 'Volkswagen',
    itemModel: 'Golf',
    itemYear: '2007',
    itemPrise: '50',
  },
  {
    itemIndex: 4,
    itemDate: '10.10.2024',
    itemImg:
      'https://i.postimg.cc/PxTt44fR/28601068-3585-495d-a081-4f1ccb0788c8.jpg',
    itemName: 'VW Seat Skoda 1.4 FSI Nockenwelle',
    itemDescription: 'Nockenwelle 1.4 FSI Benzin',
    itemMark: 'Volkswagen',
    itemModel: 'Golf',
    itemYear: '2007',
    itemPrise: 'VB',
  },
  {
    itemIndex: 5,
    itemDate: '10.10.2024',
    itemImg:
      'https://i.postimg.cc/8kqt7nyD/343f6785-7643-420d-b673-5817e1429e1d.jpg',
    itemName: 'VW Seat Skoda 1.4 FSI Zylinderkopf',
    itemDescription: 'Zylinderkopf 1.4 FSI Benzin',
    itemMark: 'Volkswagen',
    itemModel: 'Golf',
    itemYear: '2007',
    itemPrise: 'VB',
  },
  {
    itemIndex: 6,
    itemDate: '10.10.2024',
    itemImg:
      'https://i.postimg.cc/0y857vZq/8ffb8eda-9afb-4569-a1da-914c56ce0ccb.jpg',
    itemName: 'VW Golf 5 Sitze Innenausstattung',
    itemDescription: 'Vw Golf 5 3-Türen',
    itemMark: 'Volkswagen',
    itemModel: 'Golf',
    itemYear: '2007',
    itemPrise: 'VB',
  },
  {
    itemIndex: 7,
    itemDate: '03.06.2024',
    itemImg:
      'https://i.postimg.cc/bvFzXFbD/b56a325d-cc26-4b21-8738-2ff921b6d58b.jpg',
    itemName: 'radiator',
    itemDescription: 'Volvo V70 S70 S60 S80 Motor 2.4 Getriebe',
    itemMark: 'Volvo',
    itemModel: 'S80',
    itemYear: '2004',
    itemPrise: 'VB',
  },
  {
    itemIndex: 8,
    itemDate: '18.01.2024',
    itemImg:
      'https://i.postimg.cc/3JRQhZ82/d57e6261-3446-4808-b337-2624c9d40e6e.jpg',
    itemName: 'Renault Megane Bose Subwoofer',
    itemDescription: 'Subwoofer',
    itemMark: 'Renault',
    itemModel: 'Megane',
    itemYear: '2012',
    itemPrise: '249',
  },
  {
    itemIndex: 9,
    itemDate: '18.01.2024',
    itemImg:
      'https://i.postimg.cc/2SDJ6FmH/cae8df00-eecb-4ee1-b962-f64ceb655fed.jpg',
    itemName: 'VW Seat 1.0 1.4 MPI Auspuff Krümmer Vorkat Katalysator',
    itemDescription:
      'Auspuff Krümmer / Vorkat 030178baf VW Lupo Seat 1.0 1.4 MPI',
    itemMark: ['VW', 'Seat'],
    itemModel: ['Lupo', 'Arosa'],
    itemYear: '2004',
    itemPrise: '100',
  },
  {
    itemIndex: 10,
    itemDate: '18.01.2024',
    itemImg:
      'https://i.postimg.cc/MHXw90X0/c4a824fb-26d1-40dd-a722-aed2208f9ccf.jpg',
    itemName: 'VW Seat Skoda 1.4 16V Vorkat Katalysator Auspuff Krümmer',
    itemDescription:
      'Vorkat Auspuff Krümmer 036 178 EA AA Spenderfahrzeug: VW Golf 1.4 16V',
    itemMark: ['VW', 'Seat', 'Skoda'],
    itemModel: ['Golf', 'Altea', 'Octavia'],
    itemYear: '2003',
    itemPrise: '69',
  },
  {
    itemIndex: 11,
    itemDate: '08.01.2024',
    itemImg:
      'https://i.postimg.cc/rp9ywCbc/70e429d2-52c4-4214-af4b-66323000b5df.jpg',
    itemName: 'Renault Megane 3 Grandtour 1.6 dci Fap Getriebe ND4011',
    itemDescription: 'Laufleistung 86000km funktioniert einwandfrei',
    itemMark: 'Renault',
    itemModel: 'Megane',
    itemYear: '2015',
    itemPrise: 'VB',
  },
  {
    itemIndex: 12,
    itemDate: '06.01.2024',
    itemImg:
      'https://i.postimg.cc/J0z52xwh/b0aea615-1c27-411d-a284-f0406641f69a.jpg',
    itemName: 'Peugeot 306 Cabrio elektrische Fensterheber hinten',
    itemDescription: 'Elektrische Fensterheber hinten',
    itemMark: 'Peugeot',
    itemModel: '306',
    itemYear: '1998',
    itemPrise: 'VB',
  },
  {
    itemIndex: 13,
    itemDate: '05.01.2024',
    itemImg:
      'https://i.postimg.cc/cHnv48Qc/09c66e4e-e7ec-41db-8ad2-6e5734c3f984.jpg',
    itemName: 'Ford Fiesta Schalthebel Top mit Schaltsack',
    itemDescription: 'Ford Fiesta Schalthebel Top mit Schaltsack',
    itemMark: 'Ford',
    itemModel: 'Fiesta',
    itemYear: '2004',
    itemPrise: '30',
  },
];

export default goodsData;
