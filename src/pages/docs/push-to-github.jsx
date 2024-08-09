import CardCode from "../../components/cardCode";
import asaImage from "../../assets/img/asa.png";

function PushToGithub() {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          Push your project to Github
        </h2>

        <div className="space-y-5">
          <CardCode card={`git init`} />
          <CardCode card={`git add .`} />
          <CardCode card={`git commit -m "Initial commit"`} />
          <div>
            <img
              src={asaImage}
              alt="img"
              className="mb-3 cursor-pointer relative"
              style={{ zIndex: "-1" }}
            />
            <CardCode
              card={`git remote add origin https://github.com/meccoi/myrepository.git
git branch -M main
git push -u origin main`}
            />
            <span className="text-gray-900 italic text-sm">
              # push an{" "}
              <code className="font-semibold">existing repository</code> from
              the command line
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PushToGithub;
