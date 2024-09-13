'use client';
import Slideshow from './components/Slideshow';
import SearchInput from './components/SearchInput';

export default function Page() {
  return (
    <main className="flex-grow scroll-smooth">
      {/* Hero Section */}
      <div className="relative h-screen w-full">
        <Slideshow /> {/* Background Slideshow */}
        <div className="absolute inset-0 bg-black opacity-65 z-10"></div>{' '}
        {/* Dark overlay */}
        {/* Hero content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full">
          <div className="px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-300 sm:text-6xl">
              I-MOTORS
            </h1>
            <p className="pt-4 text-2xl font-bold tracking-tight text-gray-300 sm:text-4xl">
              Mietwerkstatt & Autoteile
            </p>
            <p className="mt-6 text-xl leading-8 text-green-500">
              Alles für dein Auto - Mietwerkstatt, Werkzeuge, Teile, und aus
              einer Hand!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#information"
                className="text-sm font-semibold leading-6 text-gray-300 transition-all duration-500
                   hover:text-green-300 hover:transition-all ease-in-out hover:duration-300"
              >
                Erfahren mehr <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#information2"
                className="text-sm font-semibold leading-6 text-gray-300 transition-all duration-500
                   hover:text-green-300 hover:transition-all ease-in-out hover:duration-300"
              >
                Erfahren mehr <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Information Section */}
      <section id="information" className="bg-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800">Warum I-MOTORS?</h2>
          <p className="mt-4 text-lg text-gray-600">
            I-MOTORS bietet dir alles, was du für dein Auto brauchst, aus einer
            Hand. Egal ob Mietwerkstatt, Autoteile oder Werkzeuge, wir haben
            alles, um dein Auto in Schuss zu halten.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
            dignissimos praesentium, maiores quo voluptatum pariatur velit
            doloribus provident minima itaque numquam? Consequuntur nemo quis id
            non autem voluptatem porro tempora dicta, amet natus pariatur ad
            assumenda vel sunt itaque in dolorum laudantium numquam nostrum
            totam odio quod! Quod ut quibusdam laudantium rerum doloribus
            aspernatur iure suscipit eum ipsam aperiam doloremque esse hic velit
            quo quas, veritatis eveniet reiciendis, laboriosam delectus? Beatae
            magnam quisquam officiis magni cupiditate aliquid rerum. Amet nam
            harum, recusandae dolores quisquam dolore molestiae doloribus a
            saepe officiis accusantium necessitatibus. Tempora accusamus quas
            eum praesentium ducimus totam ipsum ab voluptate necessitatibus.
            Voluptatum beatae, fuga temporibus saepe ullam impedit quae
            molestiae voluptatibus neque tempore illo vero officiis consequuntur
            ducimus harum a maiores nulla autem obcaecati exercitationem tempora
            quidem! Commodi autem soluta recusandae, fuga architecto accusamus
            delectus adipisci, unde, suscipit et eos sit blanditiis laudantium
            possimus eveniet iure. Voluptatum molestias ullam iure, nobis
            corporis labore quaerat. A beatae eum expedita ex architecto,
            perferendis dolor labore quaerat in eius! Soluta voluptatem veniam
            temporibus sint eveniet numquam molestiae quo? Vero sunt, alias
            voluptatem nostrum veritatis tempora numquam aliquid eligendi maxime
            reiciendis delectus corrupti, quibusdam animi ipsam fugiat quia
            nulla. Quia dignissimos velit rem inventore accusamus tempore
            nesciunt eum quis quod nemo cum totam sit officiis earum, quos
            expedita, aliquam perspiciatis quas eaque, delectus dolorum vel?
            Nostrum, vitae molestiae sit facere nisi optio impedit facilis fuga
            harum, unde labore culpa ab odio rerum quo amet vel nam
            exercitationem omnis voluptate at? Eligendi odio delectus provident
            maxime inventore minima expedita dicta voluptatibus in fugiat,
            itaque rem soluta earum veritatis corrupti voluptatem nobis quisquam
            quidem, fuga perferendis pariatur aliquam doloribus eveniet ratione.
            Vitae totam reiciendis, ea exercitationem consequuntur mollitia
            nesciunt quidem maxime, saepe impedit beatae ducimus officia qui sed
            praesentium explicabo itaque vero maiores quis? Libero nulla
            distinctio laborum quod sint temporibus natus possimus quia
            asperiores animi error itaque quis quaerat deleniti autem, dolore
            mollitia corporis nesciunt? Quae odio fugiat, velit eaque eligendi
            alias dolorum libero hic asperiores aliquam cum fuga dolorem harum
            unde itaque iusto veritatis debitis eum delectus nesciunt. Impedit
            repellat consectetur porro, voluptatem dolore fuga ipsam cupiditate.
            Porro incidunt ab maiores illo quaerat officia, corrupti culpa
            voluptate magni exercitationem autem ea minima est repellat
            perspiciatis facere praesentium hic assumenda voluptas quis quasi.
            Provident, ducimus pariatur nesciunt eaque est necessitatibus dolor
            natus maiores ullam exercitationem dignissimos dolorum eligendi
            rerum similique tenetur mollitia commodi, voluptatem eius quibusdam
            laborum unde laboriosam? Facilis magnam architecto adipisci! Aperiam
            quos eos possimus laboriosam ut praesentium dolorum illum, numquam
          </p>
          {/* You can add more content here, such as icons, features, etc. */}
        </div>
      </section>
      {/* Information 2 Section */}
      <section id="information2" className="bg-green-300 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800">Warum I-MOTORS?</h2>
          <p className="mt-4 text-lg text-gray-600">
            I-MOTORS bietet dir alles, was du für dein Auto brauchst, aus einer
            Hand. Egal ob Mietwerkstatt, Autoteile oder Werkzeuge, wir haben
            alles, um dein Auto in Schuss zu halten.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
            dignissimos praesentium, maiores quo voluptatum pariatur velit
            doloribus provident minima itaque numquam? Consequuntur nemo quis id
            non autem voluptatem porro tempora dicta, amet natus pariatur ad
            assumenda vel sunt itaque in dolorum laudantium numquam nostrum
            totam odio quod! Quod ut quibusdam laudantium rerum doloribus
            aspernatur iure suscipit eum ipsam aperiam doloremque esse hic velit
            quo quas, veritatis eveniet reiciendis, laboriosam delectus? Beatae
            magnam quisquam officiis magni cupiditate aliquid rerum. Amet nam
            harum, recusandae dolores quisquam dolore molestiae doloribus a
            saepe officiis accusantium necessitatibus. Tempora accusamus quas
            eum praesentium ducimus totam ipsum ab voluptate necessitatibus.
            Voluptatum beatae, fuga temporibus saepe ullam impedit quae
            molestiae voluptatibus neque tempore illo vero officiis consequuntur
            ducimus harum a maiores nulla autem obcaecati exercitationem tempora
            quidem! Commodi autem soluta recusandae, fuga architecto accusamus
            delectus adipisci, unde, suscipit et eos sit blanditiis laudantium
            possimus eveniet iure. Voluptatum molestias ullam iure, nobis
            corporis labore quaerat. A beatae eum expedita ex architecto,
            perferendis dolor labore quaerat in eius! Soluta voluptatem veniam
            temporibus sint eveniet numquam molestiae quo? Vero sunt, alias
            voluptatem nostrum veritatis tempora numquam aliquid eligendi maxime
            reiciendis delectus corrupti, quibusdam animi ipsam fugiat quia
            nulla. Quia dignissimos velit rem inventore accusamus tempore
            nesciunt eum quis quod nemo cum totam sit officiis earum, quos
            expedita, aliquam perspiciatis quas eaque, delectus dolorum vel?
            Nostrum, vitae molestiae sit facere nisi optio impedit facilis fuga
            harum, unde labore culpa ab odio rerum quo amet vel nam
            exercitationem omnis voluptate at? Eligendi odio delectus provident
            maxime inventore minima expedita dicta voluptatibus in fugiat,
            itaque rem soluta earum veritatis corrupti voluptatem nobis quisquam
            quidem, fuga perferendis pariatur aliquam doloribus eveniet ratione.
            Vitae totam reiciendis, ea exercitationem consequuntur mollitia
            nesciunt quidem maxime, saepe impedit beatae ducimus officia qui sed
            praesentium explicabo itaque vero maiores quis? Libero nulla
            distinctio laborum quod sint temporibus natus possimus quia
            asperiores animi error itaque quis quaerat deleniti autem, dolore
            mollitia corporis nesciunt? Quae odio fugiat, velit eaque eligendi
            alias dolorum libero hic asperiores aliquam cum fuga dolorem harum
            unde itaque iusto veritatis debitis eum delectus nesciunt. Impedit
            repellat consectetur porro, voluptatem dolore fuga ipsam cupiditate.
            Porro incidunt ab maiores illo quaerat officia, corrupti culpa
            voluptate magni exercitationem autem ea minima est repellat
            perspiciatis facere praesentium hic assumenda voluptas quis quasi.
            Provident, ducimus pariatur nesciunt eaque est necessitatibus dolor
            natus maiores ullam exercitationem dignissimos dolorum eligendi
            rerum similique tenetur mollitia commodi, voluptatem eius quibusdam
            laborum unde laboriosam? Facilis magnam architecto adipisci! Aperiam
            quos eos possimus laboriosam ut praesentium dolorum illum, numquam
          </p>
          {/* You can add more content here, such as icons, features, etc. */}
        </div>
      </section>
    </main>
  );
}
