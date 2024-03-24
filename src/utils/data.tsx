/*
 * II - Ingeniería Civil Industrial
 * OC - Ingeniería Civil en Obras Civiles
 * IT - Ingeniería en Informática y Telecomunicaciones
 */

export type DataProps = {
  faculty: String;
  lockers: LockerProps[];
};

export type LockerProps = {
  letter: String;
  location: String;
  slots: SlotProps[];
};

export type SlotProps = {
  number: Number;
  status: Boolean;
  student: StudentProps | null;
};

export type StudentProps = {
  name: String;
  career: String;
  mail: String;
  phone: Number;
};

export const data = {
  faculty: "FIC",
  lockers: [
    {
      letter: "A",
      location:
        "Por Vergara, al lado izquierdo de la sala del Centro de Estudiantes.",
      slots: [
        {
          number: 1,
          status: true,
          student: {
            name: "Alexander Vargas",
            career: "OC",
            mail: "natalia.cassaretto",
            phone: 957369481,
          },
        },
        {
          number: 2,
          status: true,
          student: {
            name: "Joaquin Humberto",
            career: "OC",
            mail: "joaquin.jimenez",
            phone: 989335960,
          },
        },
        {
          number: 3,
          status: true,
          student: {
            name: "Lucas Villaseca",
            career: "OC",
            mail: "lucas.villaseca_c",
            phone: 963727008,
          },
        },
        {
          number: 4,
          status: true,
          student: {
            name: "Felipe Vargas Diaz",
            career: "OC",
            mail: "felipe.vargas",
            phone: 978796762,
          },
        },
        {
          number: 5,
          status: true,
          student: {
            name: "Canelita",
            career: "PC",
            mail: "admin",
            phone: 912345678,
          },
        },
        {
          number: 6,
          status: true,
          student: {
            name: "Barbara Macias",
            career: "OC",
            mail: "barbara.macias",
            phone: 935137599,
          },
        },
        {
          number: 7,
          status: true,
          student: {
            name: "Maria de los angeles Martinez",
            career: "IT",
            mail: "maria.martinez9",
            phone: 966333232,
          },
        },
        {
          number: 8,
          status: true,
          student: {
            name: "Bastian Villarroel",
            career: "OC",
            mail: "bastian.villarroel",
            phone: 940379686,
          },
        },
        {
          number: 9,
          status: true,
          student: {
            name: "Matias Miranda",
            career: "II",
            mail: "matias.miranda2",
            phone: 981635333,
          },
        },
        {
          number: 10,
          status: true,
          student: {
            name: "Felipe Cayuman",
            career: "II",
            mail: "felipe.cayuman_r",
            phone: 979518414,
          },
        },
        {
          number: 11,
          status: true,
          student: {
            name: "Fernando Espinoza",
            career: "II",
            mail: "fernando.espinoza",
            phone: 993533464,
          },
        },
        {
          number: 12,
          status: true,
          student: {
            name: "Daniela Nova",
            career: "II",
            mail: "daniela.nova",
            phone: 962031830,
          },
        },
        {
          number: 13,
          status: true,
          student: {
            name: "Maria Paz Ibañez",
            career: "II",
            mail: "maria.ibanez",
            phone: 945252238,
          },
        },
        {
          number: 14,
          status: true,
          student: {
            name: "Michelle Ramirez",
            career: "IT",
            mail: "michelle.ramirez",
            phone: 972600465,
          },
        },
        {
          number: 15,
          status: true,
          student: {
            name: "Eric Fernandez",
            career: "II",
            mail: "eric.fernandez",
            phone: 922587913,
          },
        },
      ],
    },
    {
      letter: "B",
      location: "Por Ejercito, segundo piso, al fondo.",
      slots: [
        {
          number: 1,
          status: true,
          student: {
            name: "Anghelo Ferrada",
            career: "II",
            mail: "anghelo.ferrada",
            phone: 930723396,
          },
        },
        {
          number: 2,
          status: true,
          student: {
            name: "Barbara Rojas",
            career: "OC",
            mail: "barbara.rojas2",
            phone: 976719402,
          },
        },
        {
          number: 3,
          status: true,
          student: {
            name: "Catalina Diaz",
            career: "II",
            mail: "catalina.diaz7",
            phone: 990337065,
          },
        },
        {
          number: 4,
          status: true,
          student: {
            name: "Esteban Chavez",
            career: "OC",
            mail: "esteban.chavez",
            phone: 941559757,
          },
        },
        {
          number: 5,
          status: true,
          student: {
            name: "Mateo Morales",
            career: "II",
            mail: "mateo.morales",
            phone: 947854579,
          },
        },
        {
          number: 6,
          status: true,
          student: {
            name: "Pamela Castro",
            career: "II",
            mail: "pamela.castro_l",
            phone: 951489352,
          },
        },
        {
          number: 7,
          status: true,
          student: {
            name: "Conny Diaz",
            career: "II",
            mail: "conny.diaz_a",
            phone: 967126169,
          },
        },
        {
          number: 8,
          status: true,
          student: {
            name: "Catalina Diaz",
            career: "II",
            mail: "catalina.diaz7",
            phone: 990337065,
          },
        },
        {
          number: 9,
          status: true,
          student: {
            name: "Natalia Cassaretto",
            career: "II",
            mail: "natalia.cassaretto",
            phone: 920644853,
          },
        },
        {
          number: 10,
          status: true,
          student: {
            name: "Daniel Miranda",
            career: "IT",
            mail: "daniel.miranda2",
            phone: 930037275,
          },
        },
        {
          number: 11,
          status: true,
          student: {
            name: "Ghislaine Garcia",
            career: "OC",
            mail: "ghislaine.garcia_fe",
            phone: 945083052,
          },
        },
        {
          number: 12,
          status: true,
          student: {
            name: "Alenjandro Beltrán",
            career: "II",
            mail: "alejandro.beltran",
            phone: 949034133,
          },
        },
        {
          number: 13,
          status: true,
          student: {
            name: "Mauricio Camblor",
            career: "II",
            mail: "mauricio.camblor",
            phone: 991704528,
          },
        },
        {
          number: 14,
          status: true,
          student: {
            name: "Rita Diaz",
            career: "II",
            mail: "rita.diaz",
            phone: 973473102,
          },
        },
        {
          number: 15,
          status: true,
          student: {
            name: "Javiera Ferreira",
            career: "II",
            mail: "javiera.ferreira1",
            phone: 963608459,
          },
        },
      ],
    },
    {
      letter: "C",
      location: "Por Ejercito, segundo piso, al fondo.",
      slots: [
        {
          number: 1,
          status: true,
          student: {
            name: "Scarlett Torres",
            career: "OC",
            mail: "scarlett.torres",
            phone: 957176703,
          },
        },
        {
          number: 2,
          status: true,
          student: {
            name: "Maximiliano Oliva",
            career: "IT",
            mail: "maximiliano.oliva",
            phone: 933892855,
          },
        },
        {
          number: 3,
          status: true,
          student: {
            name: "Melani Vivar",
            career: "II",
            mail: "melani.vivar",
            phone: 958364130,
          },
        },
        {
          number: 4,
          status: true,
          student: {
            name: "Jenifer Gonzalez",
            career: "OC",
            mail: "jenifer.gonzalez",
            phone: 979837599,
          },
        },
        {
          number: 5,
          status: true,
          student: {
            name: "Ayline Escobedo",
            career: "OC",
            mail: "ayline.escobedo",
            phone: 951150319,
          },
        },
        {
          number: 6,
          status: true,
          student: {
            name: "Alexa Galaz",
            career: "IT",
            mail: "alexa.galaz_b",
            phone: 989095986,
          },
        },
        {
          number: 7,
          status: true,
          student: {
            name: "Natalia Romero",
            career: "IT",
            mail: "natalia.romero_g",
            phone: 953890796,
          },
        },
        {
          number: 8,
          status: true,
          student: {
            name: "Fernando Vera",
            career: "OC",
            mail: "fernando.vera",
            phone: 997459733,
          },
        },
        {
          number: 9,
          status: true,
          student: {
            name: "Josefina Jofre",
            career: "II",
            mail: "josefina.jofre",
            phone: 977139590,
          },
        },
        {
          number: 10,
          status: true,
          student: {
            name: "Esteban Lizama",
            career: "II",
            mail: "esteban.lizama_j",
            phone: 977903789,
          },
        },
        {
          number: 11,
          status: true,
          student: {
            name: "Juan Pablo Maldonado",
            career: "II",
            mail: "juan.maldonado1",
            phone: 971447091,
          },
        },
        {
          number: 12,
          status: true,
          student: {
            name: "José Ávalos",
            career: "II",
            mail: "jose.avalos",
            phone: 977714630,
          },
        },
        {
          number: 13,
          status: true,
          student: {
            name: "Tomás Gajardo",
            career: "II",
            mail: "tomas.gajardo",
            phone: 981482309,
          },
        },
        {
          number: 14,
          status: true,
          student: {
            name: "Shi Hao Zhang",
            career: "IT",
            mail: "shi.zhang",
            phone: 990787770,
          },
        },
        {
          number: 15,
          status: true,
          student: {
            name: "Constanza Córdova",
            career: "IT",
            mail: "constanza.cordova",
            phone: 947821937,
          },
        },
      ],
    },
    {
      letter: "D",
      location: "Por Ejercito, segundo piso, al fondo.",
      slots: [
        {
          number: 1,
          status: true,
          student: {
            name: "Rodrigo Órdenes",
            career: "IT",
            mail: "rodrigo.ordenes",
            phone: 952568330,
          },
        },
        {
          number: 2,
          status: true,
          student: {
            name: "Millaray Muñoz",
            career: "IT",
            mail: "millaray.munoz_p",
            phone: 994270681,
          },
        },
        {
          number: 3,
          status: true,
          student: {
            name: "Manuel Ignacio Hernández",
            career: "OC",
            mail: "manuel.hernandez1@",
            phone: 981752208,
          },
        },
        {
          number: 4,
          status: true,
          student: {
            name: "Shi Hao Zhang",
            career: "IT",
            mail: "shi.zhang",
            phone: 990787770,
          },
        },
        {
          number: 5,
          status: true,
          student: {
            name: "Diego Ignacio Perez Vásquez",
            career: "II",
            mail: "diego.perez4",
            phone: 973314442,
          },
        },
        {
          number: 6,
          status: true,
          student: {
            name: "Jean Sepulveda",
            career: "II",
            mail: "jean.sepulveda",
            phone: 995766226,
          },
        },
        {
          number: 7,
          status: true,
          student: {
            name: "Debora Alvarez",
            career: "II",
            mail: "debora.alvarez",
            phone: 965186668,
          },
        },
        {
          number: 8,
          status: true,
          student: {
            name: "Josefa Ojeda",
            career: "OC",
            mail: "josefa.ojeda",
            phone: 991665877,
          },
        },
        {
          number: 9,
          status: true,
          student: {
            name: "Diego Perez",
            career: "II",
            mail: "diego.perez2@",
            phone: 943424600,
          },
        },
        {
          number: 10,
          status: true,
          student: {
            name: "Alexander Martínez",
            career: "II",
            mail: "alexander.martinez@",
            phone: 975414000,
          },
        },
        {
          number: 11,
          status: true,
          student: {
            name: "Ignacio Leyton",
            career: "II",
            mail: "ignacio.leyton",
            phone: 991775535,
          },
        },
        {
          number: 12,
          status: true,
          student: {
            name: "Felipe Jeria",
            career: "IT",
            mail: "felipe.jeriam",
            phone: 933951757,
          },
        },
        {
          number: 13,
          status: false,
          student: null,
        },
        {
          number: 14,
          status: false,
          student: null,
        },
        {
          number: 15,
          status: false,
          student: null,
        },
      ],
    },
  ],
};
