import { GetServerSideProps } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import { DefaultLayout } from "../layout/DefaultLayout";

interface ProtectedProps {
  session: Session;
}

export default function Protected({ session }: ProtectedProps) {

  return (
    <DefaultLayout>
      <div>
        <p>Protected route</p>
        <p>{session.user?.name}</p>
      </div>
    </DefaultLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/',
        statusCode: 302,
      },
      props: { session: null }
    }
  }

  return {
    props: { session }
  }
}