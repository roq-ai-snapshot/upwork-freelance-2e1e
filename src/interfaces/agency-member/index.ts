import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AgencyMemberInterface {
  id?: string;
  role?: string;
  joining_date?: any;
  leaving_date?: any;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface AgencyMemberGetQueryInterface extends GetQueryInterface {
  id?: string;
  role?: string;
  user_id?: string;
}
