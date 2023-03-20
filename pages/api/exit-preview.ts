import type { NextApiRequest, NextApiResponse } from 'next'

// Função para sair do modo preview ao digitar "url"/api/exit-preview

export default function preview(req: NextApiRequest, res: NextApiResponse) {
  res.clearPreviewData({});
  res.writeHead(307, { Location: '/' })
  res.end();
}