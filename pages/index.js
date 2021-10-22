import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>PBrowse Official</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <link href="https://mdbootstrap.com/previews/mdb-ui-kit/sidenav/css/mdb.min.css" rel="stylesheet"/>
        <Header title="Welcome to PBrowse!" />
        <p className="description">
          Join Discord for downloads and updates: <a class="btn btn-info" href="discord.gg/3qS69y5UK2">Join!</a>
              <div class="container">
              <div class="row">

              <div class="col-4 mb-2">
              <div class="card" style="width: 18rem;">
                <img src="https://www.pbrowse.ml/webres/shot-1.png" class="card-img-top" alt="PBrowse "/>
                <div class="card-body">
                  <h5 class="card-title">Quick Link</h5>
                  <p class="card-text">Quickly Visit sites via quick links easy</p>
                </div>
              </div>
              </div>

              <div class="col-4 mb-2">
              <div class="card" style="width: 18rem;">
                <img src="https://www.pbrowse.ml/webres/shot-2.png" class="card-img-top" alt="PBrowse "/>
                <div class="card-body">
                  <h5 class="card-title">View News</h5>
                  <p class="card-text">Latest news on your newtab page</p>
                </div>
              </div>
              </div>

              </div>
              </div>
        </p>
      </main>

      <Footer />
    </div>
  )
}
