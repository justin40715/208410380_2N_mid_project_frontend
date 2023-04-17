import React, { useContext, useReducer, useEffect} from 'react';
import CardReducer_80 from './CardReducer_80';
import { supabase } from '../db/clientSupabase';

const initialState = {
    name: 'Pocheng Chu',
    id: '208410380',
    data: []
}

const CardContext_80 = React.createContext();

const CardProvider_80 = ({children}) => {
    const [state, dispatch] = useReducer(CardReducer_80, initialState);
    const fetchCardDataFromSupabase = async () => {
        try {
          let { data, error } = await supabase.from('card_80').select('*')
    
          console.log('data', data);
          dispatch({ type: 'GET_CARDS_SUPABASE_SUCCUSS', payload: data});
        //   setData(data);
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        fetchCardDataFromSupabase();
      }, []);
    
    return(
        <CardContext_80.Provider value={{...state}}>
            {children}
        </CardContext_80.Provider>
    )
}
const useCardContext_80 = () => {
    return useContext(CardContext_80);
}

export { CardProvider_80, useCardContext_80 }
