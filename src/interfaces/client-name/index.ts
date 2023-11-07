import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ClientNameInterface {
  id?: string;
  company_name?: string;
  project_description?: string;
  budget?: number;
  deadline?: any;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface ClientNameGetQueryInterface extends GetQueryInterface {
  id?: string;
  company_name?: string;
  project_description?: string;
  user_id?: string;
}
