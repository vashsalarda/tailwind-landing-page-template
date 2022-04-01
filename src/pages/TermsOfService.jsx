import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../partials/Header';

function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-10">
                <h1 className="h2">Terms of Service - NTC EDGE</h1>
              </div>

              {/* Form */}
              <div className="max-w-3xl mx-auto">
                <h2 className="pb-1 text-lg font-bold">1. Terms</h2>

                <p className="pb-6">By accessing this Website, accessible from <a className="hover:underline hover:text-blue-500 underline-offset-2" href="https://www.ntcedge.com">www.ntcedge.com</a>, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.</p>

                <h2 className="pb-1 text-lg font-bold">2. Use License</h2>

                <p className="pb-4 font-medium">Permission is granted to temporarily download one copy of the materials on NTC EDGE's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>

                <ul className="pb-6 list-disc list-inside">
                  <li>modify or copy the materials;</li>
                  <li>use the materials for any commercial purpose or for any public display;</li>
                  <li>attempt to reverse engineer any software contained on NTC EDGE's Website;</li>
                  <li>remove any copyright or other proprietary notations from the materials; or</li>
                  <li>transferring the materials to another person or "mirror" the materials on any other server.</li>
                </ul>

                <p className="pb-6">This will let NTC EDGE to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format. These Terms of Service has been created with the help of the <a href="https://www.termsofservicegenerator.net">Terms Of Service Generator</a>.</p>

                <h2 className="pb-1 text-lg font-bold">3. Disclaimer</h2>

                <p className="pb-6">All the materials on NTC EDGE’s Website are provided "as is". NTC EDGE makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, NTC EDGE does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.</p>

                <h2 className="pb-1 text-lg font-bold">4. Limitations</h2>

                <p className="pb-6">NTC EDGE or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on NTC EDGE’s Website, even if NTC EDGE or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.</p>

                <h2 className="pb-1 text-lg font-bold">5. Revisions and Errata</h2>

                <p className="pb-6">The materials appearing on NTC EDGE’s Website may include technical, typographical, or photographic errors. NTC EDGE will not promise that any of the materials in this Website are accurate, complete, or current. NTC EDGE may change the materials contained on its Website at any time without notice. NTC EDGE does not make any commitment to update the materials.</p>

                <h2 className="pb-1 text-lg font-bold">6. Links</h2>

                <p className="pb-6">NTC EDGE has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by NTC EDGE of the site. The use of any linked website is at the user’s own risk.</p>

                <h2 className="pb-1 text-lg font-bold">7. Site Terms of Use Modifications</h2>

                <p className="pb-6">NTC EDGE may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.</p>

                <h2 className="pb-1 text-lg font-bold">8. Your Privacy</h2>

                <p className="pb-6">Please read our Privacy Policy.</p>

                <h2 className="pb-1 text-lg font-bold">9. Governing Law</h2>

                <p className="pb-6">Any claim related to NTC EDGE's Website shall be governed by the laws of ph without regards to its conflict of law provisions.</p>

              </div>
            </div>
          </div>
        </section>

      </main>

    </div>
  );
}

export default TermsOfService;