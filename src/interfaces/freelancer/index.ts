import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface FreelancerInterface {
  id?: string;
  skills?: string;
  experience?: string;
  hourly_rate?: number;
  availability?: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface FreelancerGetQueryInterface extends GetQueryInterface {
  id?: string;
  skills?: string;
  experience?: string;
  availability?: string;
  user_id?: string;
}
