import React, { createContext, useContext, useState } from "react";
import { AuthContext, AuthContextProps } from "./AuthContext";
import Logger from "../utils/Logger";
import Rservice from '../services/requestService';


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
    userId: string | undefined;
    clientLoc: {
      description: string;
      geometry: Geometry;
    };
    amount?: number;
    serviceType: string;
    vehicle: string;
    fuelType?: string;
    instruction: string;
    status?: string;
  }

export interface RequestContextProps {
    request: RequestProps | any
    setRequest: React.Dispatch<React.SetStateAction<RequestProps>>
  validateRequest: (data: RequestProps) => Promise<boolean>
  createReq:() => Promise<any>

}

export const RequestContext = createContext<RequestContextProps>({
    request:null,
    setRequest: () => { },
  validateRequest: async (data: RequestProps) => false,
    createReq: async () => {},
});

export const RequestProvider: React.FC<fixChildrenError> = ({ children }) => {
    const { user,token } = useContext<AuthContextProps>(AuthContext);
    const [request, setRequest] = useState<RequestProps>({
    userId: user?._id,
    clientLoc: {
      description: '',
      geometry: {location:{lat:5.6037,lng:0.1870}},
    },
    amount: 0,
    serviceType: '',
    vehicle: '',
    fuelType: '',
    instruction: '',
    status: '',
    });

  async function validateRequest(data: RequestProps): Promise<boolean> {
    Logger.info(data);
        if (
          typeof data.clientLoc.description !== 'string' ||
          data.clientLoc.description.trim() === '' ||
          !isValidLocation(data.clientLoc.geometry.location) ||
          typeof data.amount !== 'number' ||
          data.amount <= 0 ||
          typeof data.serviceType !== 'string' ||
          data.serviceType.trim() === '' ||
          typeof data.vehicle !== 'string' ||
          data.vehicle.trim() === '' 
          // typeof data.fuelType !== 'string' ||
          // data.fuelType.trim() === '' ||
          // typeof data.instruction !== 'string' 
          // data.instruction.trim() === ''
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

  
  const createReq = async () => {
    try {
      const res = await Rservice.create(request,token);
      if (!res.success) {
          throw new Error(res.error);
      }
  return {
      success: true,
      msg: "Request Submitted",
  };
  } catch (error:any) {
      return {
          error:error.message,
      };
  }
  };
    
    return (
        <RequestContext.Provider value={{request, setRequest, validateRequest, createReq}}>
            {children}
        </RequestContext.Provider>
    );
};
