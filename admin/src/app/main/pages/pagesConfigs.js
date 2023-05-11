import maintenancePageConfig from './maintenance/maintenancePageConfig';
import activitiesPageConfig from './activities/activitiesPageConfig';
import authenticationPagesConfig from './authentication/authenticationPagesConfig';
import comingSoonPagesConfig from './coming-soon/comingSoonPagesConfig';
import invoicePagesConfig from './invoice/invoicePagesConfig';
import errorPagesConfig from './error/errorPagesConfig';
import pricingPagesConfig from './pricing/pricingPagesConfig';
import searchPagesConfig from './search/searchPagesConfig';
import notesPagesConfig from './notes/notesPagesConfig';
import questionPagesConfig from './questions/questionPagesConfig';
import noticePagesConfig from './notice/noticePagesConfig';
import paymentPagesConfig from './payment/paymentPagesConfig';
import studentPageConfig from './studentstatus/studentPageConfig';
import queriesPageConfig from './queries/queriesPageConfig';
import complaintsPageConfig from './complaint/complaintsPageConfig';

const pagesConfigs = [
  ...authenticationPagesConfig,
  comingSoonPagesConfig,
  errorPagesConfig,
  maintenancePageConfig,
  invoicePagesConfig,
  activitiesPageConfig,
  pricingPagesConfig,
  searchPagesConfig,
  notesPagesConfig,
  questionPagesConfig,
  noticePagesConfig,
  paymentPagesConfig,
  studentPageConfig,
  queriesPageConfig,
  complaintsPageConfig,

];

export default pagesConfigs;
