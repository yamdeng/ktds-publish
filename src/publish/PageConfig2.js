import PMemberRoleManage from 'publish/page/PMemberRoleManage';
import PDocContentCheckArround from 'publish/page/PDocContentCheckArround';
import PDocContentCheckItem from './page/PDocContentCheckItem';
import PDocContentCheckCo from './page/PDocContentCheckCo';
import PDocContentSign from './page/PDocContentSign';
import PDocContentEducationInfo from './page/PDocContentEducationInfo';
import PDocContentEducationAttendUser from './page/PDocContentEducationAttendUser';
import PDocContentInventoryList from './page/PDocContentInventoryList';
import PDocContentWPlanInfo from './page/PDocContentWPlanInfo';
import PDocContentWPlanCheck from './page/PDocContentWPlanCheck';
import PDocContentWPlanFling from './page/PDocContentWPlanFling';
import PDocContentFileAttach from './page/PDocContentFileAttach';
import PDocContentWorkInspection from './page/PDocContentWorkInspection';
import PDocContentWorkCondition from './page/PDocContentWorkCondition';
// import PDocContentWorkCondition from './page/PDocContentWorkCondition';

const PageConfig2 = {};

const list = [
  {
    component: PMemberRoleManage,
    url: '/common/PMemberRoleManage'
  },
  {
    component: PDocContentCheckArround,
    url: '/safe-docs/content/PDocContentCheckArround'
  },
  {
    component: PDocContentCheckItem,
    url: '/safe-docs/content/PDocContentCheckItem'
  },
  {
    component: PDocContentCheckCo,
    url: '/safe-docs/content/PDocContentCheckCo'
  },
  {
    component: PDocContentSign,
    url: '/safe-docs/content/PDocContentSign'
  },
  {
    component: PDocContentEducationInfo,
    url: '/safe-docs/content/PDocContentEducationInfo'
  },
  {
    component: PDocContentEducationAttendUser,
    url: '/safe-docs/content/PDocContentEducationAttendUser'
  },
  {
    component: PDocContentInventoryList,
    url: '/safe-docs/content/PDocContentInventoryList'
  },
  {
    component: PDocContentWPlanInfo,
    url: '/safe-docs/content/PDocContentWPlanInfo'
  },
  {
    component: PDocContentWPlanCheck,
    url: '/safe-docs/content/PDocContentWPlanCheck'
  },
  {
    component: PDocContentWPlanFling,
    url: '/safe-docs/content/PDocContentWPlanFling'
  },
  {
    component: PDocContentFileAttach,
    url: '/safe-docs/content/PDocContentFileAttach'
  },
  {
    component: PDocContentWorkInspection,
    url: '/safe-docs/content/PDocContentWorkInspection'
  },
  {
    component: PDocContentWorkCondition,
    url: '/safe-docs/content/PDocContentWorkCondition'
  },
  {
    component: PDocContentWorkCondition,
    url: '/safe-docs/content/PDocContentWorkCondition'
  }
];

PageConfig2.list = list;

export default PageConfig2;
