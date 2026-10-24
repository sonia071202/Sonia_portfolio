type Code = { type: "code"; lang?: string | null; value: string };
type Root = { children: Array<Code | Record<string, unknown>> };

/**
 * Remark plugin that transforms ```mermaid code blocks into
 * <Mermaid chart="..."> JSX elements so they can be rendered
 * by the MermaidDiagram component at runtime.
 */
export function remarkMermaid() {
  return (tree: Root) => {
    const children = tree.children;
    for (let i = 0; i < children.length; i++) {
      const node = children[i];
      if (node.type === "code" && node.lang === "mermaid") {
        const code = node as Code;
        children[i] = {
          type: "mdxJsxFlowElement",
          name: "Mermaid",
          attributes: [
            {
              type: "mdxJsxAttribute",
              name: "chart",
              value: code.value,
            },
          ],
          children: [],
          data: { _mdxExplicitJsx: true },
        } as unknown as Root["children"][number];
      }
    }
  };
}
