import { ReactNode } from "react";
import { FiChevronUp } from "react-icons/fi";

type TAction = {
    voir: ReactNode;
    supprimer: ReactNode
}
type TEtatClasse = {
    classe: string;
    professeur: string;
    place: number;
    inscrits: number;
    action:TAction
}[]

const EtatClasseMock : TEtatClasse =[
    {
        classe: '3eme Esp',
        professeur: 'M kamga Donfack',
        place: 80,
        inscrits: 41,
        action:{
            voir: <FiChevronUp />,
            supprimer: <FiChevronUp />
        }
    },
    {
        classe: '2nd C',
        professeur: 'M kamga Donfack',
        place: 80,
        inscrits: 41,
        action:{
            voir: <FiChevronUp />,
            supprimer: <FiChevronUp />
        }
    },
    {
        classe: '6eme A',
        professeur: 'M kamga Donfack',
        place: 80,
        inscrits: 41,
        action:{
            voir: <FiChevronUp />,
            supprimer: <FiChevronUp />
        }
    },
    {
        classe: 'Tle A4Esp',
        professeur: 'M kamga Donfack',
        place: 80,
        inscrits: 41,
        action:{
            voir: <FiChevronUp />,
            supprimer: <FiChevronUp />
        }
    },
    {
        classe: '1ere C',
        professeur: 'M kamga Donfack',
        place: 80,
        inscrits: 41,
        action:{
            voir: <FiChevronUp />,
            supprimer: <FiChevronUp />
        }
    },
    {
        classe: '5eme B',
        professeur: 'M kamga Donfack',
        place: 80,
        inscrits: 41,
        action:{
            voir: <FiChevronUp />,
            supprimer: <FiChevronUp />
        }
    },
    {
        classe: '4eme',
        professeur: 'M kamga Donfack',
        place: 80,
        inscrits: 41,
        action:{
            voir: <FiChevronUp />,
            supprimer: <FiChevronUp />
        }
    },
    {
        classe: '1ere A',
        professeur: 'M kamga Donfack',
        place: 80,
        inscrits: 41,
        action:{
            voir: <FiChevronUp />,
            supprimer: <FiChevronUp />
        }
    },
    {
        classe: 'Tle C',
        professeur: 'M kamga Donfack',
        place: 80,
        inscrits: 41,
        action:{
            voir: <FiChevronUp />,
            supprimer: <FiChevronUp />
        }
    },
    {
        classe: 'Tle D',
        professeur: 'M kamga Donfack',
        place: 80,
        inscrits: 41,
        action:{
            voir: <FiChevronUp />,
            supprimer: <FiChevronUp />
        }
    },
    {
        classe: '1ere A',
        professeur: 'M kamga Donfack',
        place: 80,
        inscrits: 41,
        action:{
            voir: <FiChevronUp />,
            supprimer: <FiChevronUp />
        }
    },
    {
        classe: '4eme',
        professeur: 'M kamga Donfack',
        place: 80,
        inscrits: 41,
        action:{
            voir: <FiChevronUp />,
            supprimer: <FiChevronUp />
        }
    },
    {
        classe: '5eme B',
        professeur: 'M kamga Donfack',
        place: 80,
        inscrits: 41,
        action:{
            voir: <FiChevronUp />,
            supprimer: <FiChevronUp />
        }
    },
    {
        classe: '3eme Esp',
        professeur: 'M kamga Donfack',
        place: 80,
        inscrits: 41,
        action:{
            voir: <FiChevronUp />,
            supprimer: <FiChevronUp />
        }
    },
    {
        classe: '1ere C',
        professeur: 'M kamga Donfack',
        place: 80,
        inscrits: 41,
        action:{
            voir: <FiChevronUp />,
            supprimer: <FiChevronUp />
        }
    },
    {
        classe: 'Tle A4Esp',
        professeur: 'M kamga Donfack',
        place: 80,
        inscrits: 41,
        action:{
            voir: <FiChevronUp />,
            supprimer: <FiChevronUp />
        }
    },
    {
        classe: '3eme all',
        professeur: 'M kamga Donfack',
        place: 80,
        inscrits: 41,
        action:{
            voir: <FiChevronUp />,
            supprimer: <FiChevronUp />
        }
    },
    {
        classe: '3eme Esp',
        professeur: 'M kamga Donfack',
        place: 80,
        inscrits: 41,
        action:{
            voir: <FiChevronUp />,
            supprimer: <FiChevronUp />
        }
    },
    {
        classe: '6eme A',
        professeur: 'M kamga Donfack',
        place: 80,
        inscrits: 41,
        action:{
            voir: <FiChevronUp />,
            supprimer: <FiChevronUp />
        }
    },
    {
        classe: '2nd C',
        professeur: 'M kamga Donfack',
        place: 80,
        inscrits: 41,
        action:{
            voir: <FiChevronUp />,
            supprimer: <FiChevronUp />
        }
    },
    {
        classe: '3eme Esp',
        professeur: 'M kamga Donfack',
        place: 80,
        inscrits: 41,
        action:{
            voir: <FiChevronUp />,
            supprimer: <FiChevronUp />
        }
    },
    {
        classe: '6eme A',
        professeur: 'M kamga Donfack',
        place: 80,
        inscrits: 41,
        action:{
            voir: <FiChevronUp />,
            supprimer: <FiChevronUp />
        }
    },
    
]

export default EtatClasseMock