import React, { createContext, useContext, useState } from "react";
import { AuthContext, AuthContextProps } from "./AuthContext";
import Logger from "../utils/Logger";


interface fixChildrenError {
    children:React.ReactNode
}

interface Location {
    lat: number;
    lng: number;
  }
  
  interface Geometry {
    location: Location;
  }

export interface RequestProps {
    id?: string;
    userID?: string;
    clientLoc: {
      description: string;
      geometry: Geometry;
    };
    amount?: number;
    serviceType: string;
    vehicle: string;
    fuelType?: string;
    instructions?: string;
    status?: string;
  }

export interface RequestContextProps {
    request: RequestProps | any
    setRequest: React.Dispatch<React.SetStateAction<RequestProps>>
    validateRequest: (data: RequestProps) => Promise<boolean>

}

export const RequestContext = createContext<RequestContextProps>({
    request:null,
    setRequest: () => { },
    validateRequest: async (data: RequestProps) => false,
});

export const RequestProvider: React.FC<fixChildrenError> = ({ children }) => {
    const { user } = useContext<AuthContextProps>(AuthContext);
    const [request, setRequest] = useState<RequestProps>({
        id: '',
    userID: user?.id,
    clientLoc: {
      description: '',
      geometry: {location:{lat:5.6037,lng:0.1870}},
    },
    amount: 0,
    serviceType: '',
    vehicle: '',
    fuelType: '',
    instructions: '',
    status: '',
    });

  async function validateRequest(data: RequestProps): Promise<boolean> {
    Logger.info(data);
        if (
          typeof data.clientLoc.description !== 'string' ||
          data.clientLoc.description.trim() === '' ||
          !isValidLocation(data.clientLoc.geometry.location) ||
          // typeof data.amount !== 'number' ||
          // data.amount <= 0 ||
          typeof data.serviceType !== 'string' ||
          data.serviceType.trim() === '' ||
          typeof data.vehicle !== 'string' ||
          data.vehicle.trim() === '' 
          // typeof data.fuelType !== 'string' ||
          // data.fuelType.trim() === '' ||
          // typeof data.instructions !== 'string' 
          // data.instructions.trim() === ''
        ) {
          return false;
        }
      
        return true;
      }
      
      function isValidLocation(location: Location): boolean {
        if (
          typeof location.lat !== 'number' ||
          typeof location.lng !== 'number'
        ) {
          return false;
        }
      
        return true;
      }    

    
    return (
        <RequestContext.Provider value={{request, setRequest, validateRequest}}>
            {children}
        </RequestContext.Provider>
    );
};
