import { useRecoilTransactionObserver_UNSTABLE } from "recoil";

const RecoilStatePersist = () => {
    useRecoilTransactionObserver_UNSTABLE(({ snapshot }) => {
      for (const modifiedAtom of (snapshot as any).getNodes_UNSTABLE({
        isModified: true,
      })) {
        const atomLoadable = snapshot.getLoadable(modifiedAtom);
        if (atomLoadable.state === 'hasValue') {
          localStorage.setItem(
            modifiedAtom.key,
            JSON.stringify({ value: atomLoadable.contents })
          );
        }
      }
    })
  }