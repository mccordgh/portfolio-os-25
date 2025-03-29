type LinkDescription = {
    url: string;
    text: string;
}

export type AppDescription = {
    id?: number;
    name?: string;
    iconImage?: string;
    shortText?: string;
    description?: string[];
    links?: LinkDescription[];
    headerImage?: string;
    activeLink?: string;
    directory?: string;
}

export type AppGroup = {
    name: string;
    directory: string;
    list: AppDescription[];
}

type AppData = {
    data: AppGroup[];
}

export default AppData;