export default function Footer() {
  return (
    <footer class="mx-auto mt-32 w-full max-w-container px-4 sm:px-6 lg:px-8">
      <div class="border-t border-slate-900/5 py-10">
        <a href="#" className="-m-1.5 p-1.5 flex justify-center items-center gap-2">
          <img className="h-8" src="/cogitous-logo.svg" alt="" />
          <span className="text-center text-sm text-slate-500">Cogitous Technology</span>
        </a>

        <p class="mt-5 text-center text-sm leading-6 text-slate-500">© 2023 Cogitous Technology. All rights reserved.</p>
      </div>
    </footer>
  );
}