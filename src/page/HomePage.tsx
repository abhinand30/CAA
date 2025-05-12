import AppInfo from '../components/AppInfo';
import AddInfo from '../components/AddInfo';
import Documents from '../components/Documents';
import SummaryComponent from '../components/SummaryComponent';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TabWizard from '../components/TabWizard';

const HomePage = () => {
 
  return (
    <div>
      <Header />
      <main>
        <div className="container ">
          <div className="row">
            <div className="col-12">
              <div className="content-area">
                <TabWizard  />
                <div className="content-area__main">
                  {/* Tab Content */}
                  <div className="tab-content">
                       <div className="tab-pane fade show active" id="appInfo">
                       <AppInfo  />
                     </div>
                    <div className="tab-pane fade" id="documents">
                      <Documents  />
                    </div>
                    <div className="tab-pane fade" id="addInfo">
                      <AddInfo  />
                    </div>
                    <div className="tab-pane fade" id="summary">
                      <SummaryComponent />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main >
      <Footer />
    </div >


  )
}

export default HomePage