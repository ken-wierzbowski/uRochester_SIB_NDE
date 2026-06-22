import { ChatWidgetComponent } from "../chat-widget/chat-widget.component";
import { FeedbackComponent } from "../feedback/feedback.component";
import { LocationsComponent } from "../location-sort/location-sort.component";
import { ReportAproblemComponent } from "../report-aproblem/report-aproblem.component";
import { IllLoansOverviewComponent } from "../ill/ill-loans-overview.component";
import { IllUserComponent } from "../ill/ill-user.component";
import { IllRequestComponent } from "../ill/ill-request.component";


// Define the map
export const selectorComponentMap = new Map<string, any>([

['nde-main-menu-after', ChatWidgetComponent],
['nde-user-area-after', FeedbackComponent],
['nde-get-it-after', LocationsComponent],
['nde-view-it-after', ReportAproblemComponent],
['nde-get-it-after', ReportAproblemComponent],
['nde-location-items-container-after', ReportAproblemComponent],
['nde-requests-after', ReportAproblemComponent],
['nde-requests-page-after', IllLoansOverviewComponent ],
/*['nde-account-overview-after', IllLoansOverviewComponent],*/
['nde-favorites-overview-before', IllLoansOverviewComponent],

]);